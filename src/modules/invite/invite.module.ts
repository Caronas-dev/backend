import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InviteController } from './controllers/invite.controller';
import { InviteService } from './services/invite.service';
import { InviteEntity } from 'src/domain/invite/entity/invite.entity';
import { InviteRepository } from './repositories/invite.repository';
import { RideRepository } from '../ride/repositories/ride.repository';
import { RideEntity } from 'src/domain/ride/entity/ride.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([InviteEntity, RideEntity]), UserModule],
  controllers: [InviteController],
  providers: [InviteService, InviteRepository, RideRepository],
})
export class InviteModule {}
