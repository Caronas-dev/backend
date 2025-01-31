import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RideService } from '../services/ride.service';
import { CreateRideDTO } from '../dtos/createRide.dto';
import { RideEntity } from 'src/domain/ride/entity/ride.entity';

@Controller('rides')
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Get()
  async findAll(): Promise<RideEntity[]> {
    try {
      return await this.rideService.findAll();
    } catch (error) {
      console.log(error);
      return Promise.reject('Error finding rides');
    }
  }

  @Post()
  async create(@Body() createRideDto: CreateRideDTO): Promise<RideEntity> {
    try {
      return await this.rideService.create(createRideDto);
    } catch (error) {
      console.log(error);
      return Promise.reject('Error creating ride');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RideEntity | null> {
    try {
      return await this.rideService.findOne(id);
    } catch (error) {
      console.log(error);
      return Promise.reject('Error finding ride');
    }
  }
}
