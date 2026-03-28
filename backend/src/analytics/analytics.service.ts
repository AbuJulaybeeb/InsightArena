import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Prediction } from '../predictions/entities/prediction.entity';
import { LeaderboardEntry } from '../leaderboard/entities/leaderboard-entry.entity';
import { DashboardKpisDto } from './dto/dashboard-kpis.dto';

/** Tier thresholds: Bronze < 200, Silver < 500, Gold < 1000, Platinum ≥ 1000 */
export function predictorTierFromReputation(reputationScore: number): string {
  if (reputationScore < 200) return 'Bronze Predictor';
  if (reputationScore < 500) return 'Silver Predictor';
  if (reputationScore < 1000) return 'Gold Predictor';
  return 'Platinum Predictor';
}

export function accuracyRateFromUser(user: User): string {
  if (user.total_predictions <= 0) return '0.0';
  return (
    (user.correct_predictions / user.total_predictions) *
    100
  ).toFixed(1);
}

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Prediction)
    private readonly predictionsRepository: Repository<Prediction>,
    @InjectRepository(LeaderboardEntry)
    private readonly leaderboardRepository: Repository<LeaderboardEntry>,
  ) {}

  async getDashboard(user: User): Promise<DashboardKpisDto> {
    const fullUser = await this.usersRepository.findOne({
      where: { id: user.id },
    });
    if (!fullUser) {
      throw new NotFoundException('User not found');
    }

    const latestGlobalEntry = await this.leaderboardRepository
      .createQueryBuilder('entry')
      .where('entry.user_id = :userId', { userId: fullUser.id })
      .andWhere('entry.season_id IS NULL')
      .orderBy('entry.updated_at', 'DESC')
      .getOne();

    const active_predictions_count = await this.predictionsRepository
      .createQueryBuilder('prediction')
      .innerJoin('prediction.market', 'market')
      .where('prediction.userId = :userId', { userId: fullUser.id })
      .andWhere('market.is_resolved = false')
      .andWhere('market.is_cancelled = false')
      .getCount();

    const resolvedPredictions = await this.predictionsRepository
      .createQueryBuilder('prediction')
      .innerJoinAndSelect('prediction.market', 'market')
      .where('prediction.userId = :userId', { userId: fullUser.id })
      .andWhere('market.is_resolved = true')
      .andWhere('market.is_cancelled = false')
      .orderBy('market.resolution_time', 'DESC')
      .addOrderBy('prediction.submitted_at', 'DESC')
      .getMany();

    const current_streak = this.computeWinStreakFromResolved(resolvedPredictions);

    const reputation_score = fullUser.reputation_score;

    return {
      total_predictions: fullUser.total_predictions,
      accuracy_rate: accuracyRateFromUser(fullUser),
      current_rank: latestGlobalEntry?.rank ?? 0,
      total_rewards_earned_stroops: String(fullUser.total_winnings_stroops),
      active_predictions_count,
      current_streak,
      reputation_score,
      tier: predictorTierFromReputation(reputation_score),
    };
  }

  private computeWinStreakFromResolved(predictions: Prediction[]): number {
    let streak = 0;
    for (const p of predictions) {
      const m = p.market;
      if (!m?.resolved_outcome) break;
      if (p.chosen_outcome === m.resolved_outcome) streak += 1;
      else break;
    }
    return streak;
  }
}
