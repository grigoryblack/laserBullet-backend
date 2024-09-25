import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {Gun} from "../Guns/gun.entity";
import {Target} from "../Targets/target.entity";

@Entity('users')
export class User {
    @ApiProperty({ description: 'Уникальный идентификатор пользователя' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ description: 'Имя пользователя' })
    @Column()
    name: string;

    @ApiProperty({ description: 'Фамилия пользователя' })
    @Column()
    secondName: string;

    @ApiProperty({ description: 'Оружие пользователя', type: () => Gun })
    @OneToOne(() => Gun, { nullable: true })
    @JoinColumn()
    gun: Gun;

    @ApiProperty({ description: 'Мишень пользователя', type: () => Target })
    @OneToOne(() => Target, { nullable: true })
    @JoinColumn()
    target: Target;

    @ApiProperty({ description: 'Количество выстрелов пользователя', default: 0 })
    @Column({ type: 'int', default: 0 })
    shots: number;

    @ApiProperty({ description: 'Дата создания пользователя', type: 'string', format: 'date-time' })
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ApiProperty({ description: 'Дата удаления пользователя (мягкое удаление)', type: 'string', format: 'date-time' })
    @DeleteDateColumn()
    deletedAt: Date;
}
