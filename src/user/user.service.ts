import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/User';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repositoryUser: Repository<User>
  ) {}

  findAll(options?: FindManyOptions<User>): Promise<User[]> {
    return this.repositoryUser.find(options);
  }

  findOne(username: string): Promise<User | undefined> {
    return this.repositoryUser.findOne({username});
  }

  async remove(id: number): Promise<void> {
    await this.repositoryUser.delete(id);
  }
}
