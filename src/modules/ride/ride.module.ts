import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RideController } from './controllers/ride.controller';
import { RideService } from './services/ride.service';
import { RideEntity } from 'src/domain/ride/entity/ride.entity';
import { RideRepository } from './repositories/ride.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RideEntity])],
  controllers: [RideController],
  providers: [RideService, RideRepository],
})
export class RideModule {}
