import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { SignUpModule } from './signup/signUp.module';
import { ProfileModule } from './profile/profile.module';
import { MeModule } from './me/me.module';
import { PassportModule } from '@nestjs/passport';
import { LoginGuard } from './login.guard';
import { AuthenticatedGuard } from './authenticated.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PassportModule.register({
      defaultStrategy: 'local',
      session: true
  }),
    AuthModule, UserModule, SignUpModule, ProfileModule, MeModule],
  controllers: [AppController],
  providers: [AppService, LoginGuard, AuthenticatedGuard],
})
export class AppModule {}
