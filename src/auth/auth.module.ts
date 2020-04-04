import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { LocalStrategy, SessionSerializer } from './local.strategy';

@Module({
  imports: [UserModule],
  providers: [AuthService, LocalStrategy, SessionSerializer]
})
export class AuthModule {}
