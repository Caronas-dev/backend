import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDTO } from '../dtos/createUser.dto';
import { UserEntity } from 'src/domain/user/entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      console.log(error);
      return Promise.reject('Error finding users');
    }
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDTO): Promise<UserEntity> {
    try {
      return await this.userService.create(createUserDto);
    } catch (error) {
      console.log(error);
      return Promise.reject('Error creating user');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserEntity | null> {
    try {
      return await this.userService.findOne(id);
    } catch (error) {
      console.log(error);
      return Promise.reject('Error finding user');
    }
  }
}
