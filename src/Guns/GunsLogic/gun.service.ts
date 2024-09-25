import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Gun} from "../../database/Entity/Guns/gun.entity";
import {CreateGunDto, UpdateGunDto} from "./gun.dto";


@Injectable()
export class GunService {
    constructor(
        @InjectRepository(Gun)
        private gunRepository: Repository<Gun>,
    ) {}

    findAll(): Promise<Gun[]> {
        return this.gunRepository.find({ where: { deletedAt: null } });
    }

    findOne(id: string): Promise<Gun> {
        return this.gunRepository.findOne({ where: { id, deletedAt: null } });
    }

    create(createGunDto: CreateGunDto): Promise<Gun> {
        const gun = this.gunRepository.create(createGunDto);
        return this.gunRepository.save(gun);
    }

    async update(id: string, updateGunDto: UpdateGunDto): Promise<Gun> {
        const gun = await this.gunRepository.findOneBy({ id });
        if (!gun || gun.deletedAt) {
            throw new NotFoundException(`Ружье с id ${id} не найдено`);
        }
        Object.assign(gun, updateGunDto);
        return this.gunRepository.save(gun);
    }

    async remove(id: string): Promise<void> {
        const gun = await this.gunRepository.findOneBy({ id });
        if (!gun || gun.deletedAt) {
            throw new NotFoundException(`Ружье с id ${id} не найдено`);
        }
        await this.gunRepository.softDelete(id);
    }
}
