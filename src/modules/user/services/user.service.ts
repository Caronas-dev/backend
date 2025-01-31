import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserEntity } from 'src/domain/user/entity/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }

  async create(createUserDto: any): Promise<UserEntity> {
    return await this.userRepository.create(createUserDto);
  }

  async findOne(id: number): Promise<UserEntity | null> {
    return await this.userRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return await this.userRepository.findByEmail(email);
  }
}
