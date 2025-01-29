import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RideService } from '../services/ride.service';

@Controller('rides')
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Get()
  findAll() {
    return this.rideService.findAll();
  }

  @Post()
  create(@Body() createRideDto: any) {
    return this.rideService.create(createRideDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rideService.findOne(id);
  }
}
