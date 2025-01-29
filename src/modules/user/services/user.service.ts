import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll() {
    return this.userRepository.findAll();
  }

  create(createUserDto: any) {
    return this.userRepository.create(createUserDto);
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }
}
