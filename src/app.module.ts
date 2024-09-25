import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { databaseConfig } from './config/database.config';
import {ConfigModule} from "@nestjs/config";
import {UserModule} from "./Users/user.module";
import {GunModule} from "./Guns/gun.module";
import {TargetModule} from "./Targets/target.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(databaseConfig),
    UserModule,
    GunModule,
    TargetModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
