import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InviteEntity } from '../../../domain/invite/entity/invite.entity';
import { SendInviteDTO } from '../dtos/sendInvite.dto';

@Injectable()
export class InviteRepository {
  constructor(private readonly repository: Repository<InviteEntity>) {}

  async findAll(where: FindOptionsWhere<InviteEntity>, step: number): Promise<InviteEntity[]> {
    return await this.repository.find({ where, take: step });
  }

  async create(sendInviteDTO: SendInviteDTO): Promise<InviteEntity> {
    const invite = this.repository.create(sendInviteDTO);
    return await this.repository.save(invite);
  }

  async findOne(id: number): Promise<InviteEntity | null> {
    return await this.repository.findOne({ where: { id } });
  }
}
