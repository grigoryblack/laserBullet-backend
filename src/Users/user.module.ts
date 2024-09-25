import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "../database/Entity/Users/users.entity";
import {UserController} from "./UserLogic/user.controller";
import {UserService} from "./UserLogic/user.service";
import {TargetService} from "../Targets/TargetLogic/target.service";
import {GunService} from "../Guns/GunsLogic/gun.service";
import {TargetController} from "../Targets/TargetLogic/target.controller";
import {GunController} from "../Guns/GunsLogic/gun.controller";
import {Target} from "../database/Entity/Targets/target.entity";
import {Gun} from "../database/Entity/Guns/gun.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Gun, Target]),
    ],
    controllers: [UserController, GunController, TargetController],
    providers: [UserService, GunService, TargetService],
})
export class UserModule {}
