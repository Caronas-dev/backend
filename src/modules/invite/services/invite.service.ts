import { Injectable } from '@nestjs/common';
import { InviteRepository } from '../repositories/invite.repository';
import { SendInviteDTO } from '../dtos/sendInvite.dto';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { RideRepository } from 'src/modules/ride/repositories/ride.repository';
import { InviteEntity } from 'src/domain/invite/entity/invite.entity';

@Injectable()
export class InviteService {
  constructor(
    private readonly inviteRepository: InviteRepository,
    private readonly userRepository: UserRepository,
    private readonly rideRepository: RideRepository
  ) {}

  create(createInviteDto: any) {
    return this.inviteRepository.create(createInviteDto);
  }

  async findAll(): Promise<InviteEntity[]> {
    return await this.inviteRepository.findAll({ userId: 20 }, 10); //TODO change to req user id
  }

  async sendInvite(sendInviteDTO: SendInviteDTO): Promise<InviteEntity> {
    const riderId = 20; //TODO change to req user id

    const invitedUser = await this.userRepository.findOne(sendInviteDTO.userId);
    if (!invitedUser) {
      throw new Error('Invited user not found');
    }

    const ride = await this.rideRepository.findOne(sendInviteDTO.rideId);
    if (!ride) {
      throw new Error('Ride not found');
    }

    if (ride.driverId !== riderId) {
      throw new Error('Unauthorized');
    }

    return await this.inviteRepository.create(sendInviteDTO);
  }

  async findOne(id: number) {
    const invite = await this.inviteRepository.findOne(id);
    if (!invite) {
      throw new Error('Invite not found');
    }

    if (invite.userId !== 20) {
      //TODO change to req user id
      throw new Error('Unauthorized');
    }

    return invite;
  }
}
