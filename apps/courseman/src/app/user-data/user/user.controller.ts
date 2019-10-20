import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
  UseGuards
} from '@nestjs/common';
import { User } from './user.decorator';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put()
  async update(
    @User('id') userId: number,
    @Body('user') userData: { username: string; password: string }
  ) {
    return await this.userService.update(userId, userData);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body('user')
  userData: {
    username: string;
    password: string;
  }) {
    return this.userService.create(userData);
  }

  @Delete(':slug')
  async delete(@Param() params) {
    return await this.userService.delete(params.slug);
  }
}
