import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InviteEntity } from '../../../domain/invite/entity/invite.entity';

@Injectable()
export class InviteRepository {
  constructor(private readonly repository: Repository<InviteEntity>) {}

  create(createInviteDto: any) {
    const invite = this.repository.create(createInviteDto);
    return this.repository.save(invite);
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }
}
