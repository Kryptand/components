import {
  Controller,
  UseGuards,
  Post,
  Request,
  Get,
  Body
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('user') userData: { username: string; password: string }) {
    return this.authService.login(userData);
  }
  @Get('refresh')
  @UseGuards(AuthGuard())
  async refresh(@Request() req) {
    return this.authService.loginByToken(req.body.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
