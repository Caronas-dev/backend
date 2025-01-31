import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SendInviteDTO {
  @IsNumber()
  @IsNotEmpty()
  rideId: number;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
