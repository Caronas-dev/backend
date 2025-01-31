import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../../../domain/user/entity/user.entity';
import { CreateUserDTO } from '../dtos/createUser.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly repository: Repository<UserEntity>) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.repository.find();
  }

  async create(createUserDto: CreateUserDTO): Promise<UserEntity> {
    const user = this.repository.create(createUserDto);
    return await this.repository.save(user);
  }

  async findOne(id: number): Promise<UserEntity | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return await this.repository.findOne({ where: { email } });
  }
}
