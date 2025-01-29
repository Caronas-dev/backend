import { Injectable } from '@nestjs/common';
import { RideRepository } from '../repositories/ride.repository';

@Injectable()
export class RideService {
  constructor(private readonly rideRepository: RideRepository) {}

  findAll() {
    return this.rideRepository.findAll();
  }

  create(createRideDto: any) {
    return this.rideRepository.create(createRideDto);
  }

  findOne(id: number) {
    return this.rideRepository.findOne(id);
  }
}
