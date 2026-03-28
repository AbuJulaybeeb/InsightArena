import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { User } from '../users/entities/user.entity';
import { Season } from './entities/season.entity';
import { SeasonsController } from './seasons.controller';
import { SeasonsService } from './seasons.service';

@Module({
  imports: [TypeOrmModule.forFeature([Season, User]), UsersModule],
  controllers: [SeasonsController],
  providers: [SeasonsService],
  exports: [SeasonsService],
})
export class SeasonsModule {}
