import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {User} from "../Users/users.entity";

@Entity('targets')
export class Target {
    @ApiProperty({ description: 'Уникальный идентификатор мишени' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ description: 'Идентификатор текущей мишени' })
    @Column()
    currentID: string;

    @ApiProperty({ description: 'Пользователь, которому принадлежит мишень', type: () => User })
    @OneToOne(() => User, user => user.target)
    user: User;

    @ApiProperty({ description: 'Дата создания мишени', type: 'string', format: 'date-time' })
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ApiProperty({ description: 'Дата удаления мишени (мягкое удаление)', type: 'string', format: 'date-time' })
    @DeleteDateColumn()
    deletedAt: Date;
}
