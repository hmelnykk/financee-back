import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  getAllUsers() {
    return this.usersService.getAll();
  }

  @Get(':user_id')
  getUserById(@Param('user_id') user_id: string) {
    return this.usersService.getOne(parseInt(user_id));
  }

  @Post('')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Delete(':user_id')
  deleteUser(@Param('user_id') user_id: string) {
    this.usersService.remove(parseInt(user_id));
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const user = await this.usersService.getOneByEmail(email);
    if (user && user.password === password) {
      return {
        status: 'Logged in',
        userId: user.id,
      };
    }
    return {
      status: 'failed',
    };
  }
}
