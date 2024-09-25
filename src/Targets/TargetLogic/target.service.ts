import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Target} from "../../database/Entity/Targets/target.entity";
import {CreateTargetDto, UpdateTargetDto} from "./target.dto";


@Injectable()
export class TargetService {
    constructor(
        @InjectRepository(Target)
        private targetRepository: Repository<Target>,
    ) {}

    findAll(): Promise<Target[]> {
        return this.targetRepository.find({ where: { deletedAt: null } });
    }

    findOne(id: string): Promise<Target> {
        return this.targetRepository.findOne({ where: { id, deletedAt: null } });
    }

    create(createTargetDto: CreateTargetDto): Promise<Target> {
        const target = this.targetRepository.create(createTargetDto);
        return this.targetRepository.save(target);
    }

    async update(id: string, updateTargetDto: UpdateTargetDto): Promise<Target> {
        const target = await this.targetRepository.findOneBy({ id });
        if (!target || target.deletedAt) {
            throw new NotFoundException(`Мишень с id ${id} не найдена`);
        }
        Object.assign(target, updateTargetDto);
        return this.targetRepository.save(target);
    }

    async remove(id: string): Promise<void> {
        const target = await this.targetRepository.findOneBy({ id });
        if (!target || target.deletedAt) {
            throw new NotFoundException(`Мишень с id ${id} не найдена`);
        }
        await this.targetRepository.softDelete(id);
    }
}
