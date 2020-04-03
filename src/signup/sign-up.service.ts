import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/User';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignUpService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>) {
  }

  async signUp(user: User): Promise<{id: number} | null> {
    const password = await bcrypt.hash(user.password, 10);
    try {
      const result = await this.userRepository.insert({ ...user, password });
      return result.identifiers[0] as {id: number};
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
