import { Injectable } from '@nestjs/common';
import { InviteRepository } from '../repositories/invite.repository';

@Injectable()
export class InviteService {
  constructor(private readonly inviteRepository: InviteRepository) {}

  create(createInviteDto: any) {
    return this.inviteRepository.create(createInviteDto);
  }

  findOne(id: number) {
    return this.inviteRepository.findOne(id);
  }
}
