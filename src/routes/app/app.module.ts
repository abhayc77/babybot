import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import V1Module from '@v1/v1.module';

import { MongooseModule } from '@nestjs/mongoose';
import AppController from './app.controller';
import AppService from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL as string, {
      // automatically try to reconnect when it loses connection
      // autoReconnect: true,
      //dbName: 'babybot',
      //useCreateIndex: true,
      // reconnect every reconnectInterval milliseconds
      // for reconnectTries times
      // reconnectTries: Number.MAX_VALUE,
      // reconnectInterval: 1000,
      // flag to allow users to fall back to the old
      // parser if they find a bug in the new parse
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_HOST,
        port: Number(process.env.MAILER_PORT),
        secure: false,
        auth: {
          user: process.env.MAILER_USERNAME,
          pass: process.env.MAILER_PASSWORD,
        },
      },
      defaults: {
        from: process.env.MAILER_FROM_EMAIL,
      },
      template: {
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    V1Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
