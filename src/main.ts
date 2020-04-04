import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
require('dotenv').config();

export function wrapGlobalMiddleware(app: INestApplication) {
  app.use(cookieParser());
  app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  wrapGlobalMiddleware(app);

  await app.listen(3000);
}
bootstrap();
