import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { SignUpModule } from './signup/signUpModule';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UserModule, SignUpModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
