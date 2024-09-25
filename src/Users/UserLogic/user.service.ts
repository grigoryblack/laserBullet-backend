import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/Entity/Users/users.entity';
import {Gun} from "../../database/Entity/Guns/gun.entity";
import {Target} from "../../database/Entity/Targets/target.entity";
import {CreateUserDto, UpdateUserDto} from "./user.dto";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Gun) // Внедряем репозиторий Gun
        private gunRepository: Repository<Gun>,

        @InjectRepository(Target) // Внедряем репозиторий Target
        private targetRepository: Repository<Target>,
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find({ relations: ['gun', 'target'] });
    }

    findOne(id: string): Promise<User> {
        return this.userRepository.findOne({ where: { id }, relations: ['gun', 'target'] });
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = this.userRepository.create();
        Object.assign(user, createUserDto);
        return this.userRepository.save(user);
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`Пользователь с id ${id} не найден`);
        }
        Object.assign(user, updateUserDto);
        return this.userRepository.save(user);
    }

    async remove(id: string): Promise<void> {
        const user = await this.userRepository.findOneBy({ id });
        if (!user || user.deletedAt) {
            throw new NotFoundException(`Пользователь с id ${id} не найден`);
        }
        await this.userRepository.softDelete(id);
    }
}
