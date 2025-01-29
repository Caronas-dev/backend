import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { InviteService } from '../services/invite.service';

@Controller('invites')
export class InviteController {
  constructor(private readonly inviteService: InviteService) {}

  @Post()
  create(@Body() createInviteDto: any) {
    return this.inviteService.create(createInviteDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.inviteService.findOne(id);
  }
}
