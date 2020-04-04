import { Module } from '@nestjs/common';
import { MeController } from './me.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from '../entity/Profile';
import { MeService } from './me.service';
import { User } from '../entity/User';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, User])],
  controllers: [MeController],
  providers: [MeService]
})
export class MeModule {}
