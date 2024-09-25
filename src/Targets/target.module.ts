import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TargetService } from './TargetLogic/target.service';
import { TargetController } from './TargetLogic/target.controller';
import {Target} from "../database/Entity/Targets/target.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Target])],
    providers: [TargetService],
    controllers: [TargetController],
    exports: [TargetService],
})
export class TargetModule {}
