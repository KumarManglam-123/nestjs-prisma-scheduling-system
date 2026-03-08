import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return { message: 'Users endpoint working' };
  }

  @Post()
  createUser(@Body() data: any) {
    return {
      message: 'User created',
      data,
    };
  }
}