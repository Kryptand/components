import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne({
      username: username,
      password: pass
    });
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async loginByToken(id: number) {
    const foundUser = await this.userService.findById(id);
    if (foundUser) {
      const payload = {
        username: foundUser.username,
        sub: foundUser.id
      };
      return {
        access_token: this.jwtService.sign(payload)
      };
    }
    return new Error('Not Authenticated');
  }
  async login(user: any) {
    const foundUser = await this.userService.findOne({
      username: user.username,
      password: user.password
    });
    if (foundUser) {
      const payload = {
        username: user.username,
        sub: foundUser.id + ''
      };
      console.debug(payload);
      return {
        access_token: this.jwtService.sign(payload)
      };
    }
    return new Error('Not Authenticated');
  }
}
