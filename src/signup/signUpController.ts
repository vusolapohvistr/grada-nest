import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { User } from '../entity/User';
import { SignUpService } from './sign-up.service';

@Controller('signup')
export class SignUpController {
  constructor(
    private signUpService: SignUpService) {
  }

  @Post('')
  async signUp(@Body() user: User): Promise<{id: number}> {
    const newUser = await this.signUpService.signUp(user);
    if (newUser) {
      return newUser;
    } else {
      throw new BadRequestException('User or email already exists');
    }
  }
}
