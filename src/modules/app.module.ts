import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { RideModule } from './ride/ride.module';
import { InviteModule } from './invite/invite.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [DatabaseModule, AuthModule, UserModule, RideModule, InviteModule],
})
export class AppModule {}
