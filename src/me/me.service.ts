import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from '../entity/Profile';
import { Repository } from 'typeorm';
import { User } from '../entity/User';

@Injectable()
export class MeService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  me(user: User) {
    return this.userRepository.findOne({
      join: {
        alias: 'user',
        innerJoinAndSelect: {
          profile: 'user.profile'
        }
      },
      where: {
        id: user.id
      }

    });
  }
}
