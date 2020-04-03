import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../entity/User';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user: User = await this.userService.findOne(username);
    if (user) {
      const isValid: boolean = await bcrypt.compare(password, user.password);
      if (isValid) {
        return user;
      }
    }
    return null;
  }
}
