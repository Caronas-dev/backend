import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../../../domain/user/entity/user.entity';
import { CreateUserDTO } from '../dtos/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) {}

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

  async findOneByEmail(email: string): Promise<UserEntity | null> {
    return await this.repository.findOneBy({ email });
  }
}
