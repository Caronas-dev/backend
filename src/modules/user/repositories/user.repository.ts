import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../../../domain/user/entity/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly repository: Repository<UserEntity>) {}

  findAll() {
    return this.repository.find();
  }

  create(createUserDto: any) {
    const user = this.repository.create(createUserDto);
    return this.repository.save(user);
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }
}
