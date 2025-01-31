import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { InviteService } from '../services/invite.service';
import { InviteEntity } from 'src/domain/invite/entity/invite.entity';

@Controller('invites')
export class InviteController {
  constructor(private readonly inviteService: InviteService) {}

  @Post()
  async create(@Body() createInviteDto: any): Promise<InviteEntity> {
    try {
      return await this.inviteService.create(createInviteDto);
    } catch (error) {
      console.log(error);
      return Promise.reject('Error creating invite');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<InviteEntity | null> {
    try {
      return await this.inviteService.findOne(id);
    } catch (error) {
      console.log(error);
      return Promise.reject('Error finding invite');
    }
  }

  @Get()
  async findAll(): Promise<InviteEntity[]> {
    try {
      return await this.inviteService.findAll();
    } catch (error) {
      console.log(error);
      return Promise.reject('Error finding invites');
    }
  }
}
