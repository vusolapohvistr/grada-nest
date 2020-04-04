import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LoginGuard } from './login.guard';

@Controller()
export class AppController {
  @UseGuards(LoginGuard)
  @Post('/login')
  async login(@Request() req) {
    return req.user;
  }
}
