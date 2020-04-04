import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { SignUpController } from './signUpController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/User';
import { Profile } from '../entity/Profile';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile])],
  providers: [SignUpService],
  controllers: [SignUpController]
})
export class SignUpModule {}
