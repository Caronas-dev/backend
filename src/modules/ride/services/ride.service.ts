import { Injectable } from '@nestjs/common';
import { RideRepository } from '../repositories/ride.repository';
import { CreateRideDTO } from '../dtos/createRide.dto';
import { RideEntity } from 'src/domain/ride/entity/ride.entity';

@Injectable()
export class RideService {
  constructor(private readonly rideRepository: RideRepository) {}

  async findAll(): Promise<RideEntity[]> {
    return await this.rideRepository.findAll({}, 10);
  }

  async create(createRideDto: CreateRideDTO): Promise<RideEntity> {
    // TODO - get the driverId from the request
    return await this.rideRepository.create(createRideDto, 29);
  }

  async findOne(id: number) {
    return await this.rideRepository.findOne(id);
  }
}
