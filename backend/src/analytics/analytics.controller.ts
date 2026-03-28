import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';
import { DashboardKpisDto } from './dto/dashboard-kpis.dto';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../users/entities/user.entity';

@ApiTags('Analytics')
@ApiBearerAuth()
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Aggregated dashboard KPIs for the authenticated user' })
  @ApiResponse({ status: 200, description: 'Dashboard KPIs', type: DashboardKpisDto })
  async getDashboard(@CurrentUser() user: User): Promise<DashboardKpisDto> {
    return this.analyticsService.getDashboard(user);
  }
}
