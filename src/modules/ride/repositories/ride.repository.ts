import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { RideEntity } from '../../../domain/ride/entity/ride.entity';
import { CreateRideDTO } from '../dtos/createRide.dto';

@Injectable()
export class RideRepository {
  constructor(private readonly repository: Repository<RideEntity>) {}

  async findAll(where: FindOptionsWhere<RideEntity>, step: number): Promise<RideEntity[]> {
    return await this.repository.find({ where, take: step });
  }

  async create(createRideDto: CreateRideDTO, driverId: number): Promise<RideEntity> {
    const ride = this.repository.create({ driverId, ...createRideDto });
    return await this.repository.save(ride);
  }

  async findOne(id: number): Promise<RideEntity | null> {
    return await this.repository.findOne({ where: { id } });
  }
}
