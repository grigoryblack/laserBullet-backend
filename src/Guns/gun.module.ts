import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Gun} from "../database/Entity/Guns/gun.entity";
import {GunService} from "./GunsLogic/gun.service";
import {GunController} from "./GunsLogic/gun.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Gun])],
    providers: [GunService],
    controllers: [GunController],
    exports: [GunService],
})
export class GunModule {}
