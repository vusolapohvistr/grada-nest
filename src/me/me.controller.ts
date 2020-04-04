import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { MeService } from './me.service';
import { AuthenticatedGuard } from '../authenticated.guard';

@Controller('me')
export class MeController {
  constructor(
    private meService: MeService
  ) {}

  @UseGuards(AuthenticatedGuard)
  @Get('')
  async get(@Request() req) {
    return await this.meService.me(req.user);
  }
}
