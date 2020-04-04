import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/User';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Profile } from '../entity/Profile';

@Injectable()
export class SignUpService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>) {
  }

  async signUp(user: User): Promise<User | null> {
    const password = await bcrypt.hash(user.password, 10);
    try {
      const newProfile = await this.profileRepository.create();
      await this.profileRepository.save(newProfile);
      const newUser = await this.userRepository.create(user);
      newUser.password = password;
      newUser.profile = newProfile;
      await this.userRepository.save(newUser);
      return newUser;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
