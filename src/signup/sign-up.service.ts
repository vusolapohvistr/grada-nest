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
    private profileRepository: Repository<Profile>) {
  }

  async signUp(user: User): Promise<{id: number} | null> {
    const password = await bcrypt.hash(user.password, 10);
    try {
      const result = await this.userRepository.insert({ ...user, password });
      const u = await this.userRepository.findOne(result.identifiers[0]);
      const profile = await this.profileRepository.insert({user: u});
      console.log(u, profile);
      return result.identifiers[0] as {id: number};
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
