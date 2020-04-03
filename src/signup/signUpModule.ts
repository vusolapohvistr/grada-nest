import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { SignUpController } from './signUpController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [SignUpService],
  controllers: [SignUpController]
})
export class SignUpModule {}
