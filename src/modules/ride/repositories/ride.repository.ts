import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RideEntity } from '../../../domain/ride/entity/ride.entity';

@Injectable()
export class RideRepository {
  constructor(private readonly repository: Repository<RideEntity>) {}

  findAll() {
    return this.repository.find();
  }

  create(createRideDto: any) {
    const ride = this.repository.create(createRideDto);
    return this.repository.save(ride);
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }
}