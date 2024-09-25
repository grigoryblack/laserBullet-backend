import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {User} from "../Users/users.entity";

@Entity('guns')
export class Gun {
    @ApiProperty({ description: 'Уникальный идентификатор ружья' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ description: 'Идентификатор текущего ружья' })
    @Column()
    currentID: string;

    @ApiProperty({ description: 'Пользователь, которому принадлежит ружье', type: () => User })
    @OneToOne(() => User, user => user.gun)
    user: User;

    @ApiProperty({ description: 'Дата создания ружья', type: 'string', format: 'date-time' })
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ApiProperty({ description: 'Дата удаления ружья (мягкое удаление)', type: 'string', format: 'date-time' })
    @DeleteDateColumn()
    deletedAt: Date;
}
