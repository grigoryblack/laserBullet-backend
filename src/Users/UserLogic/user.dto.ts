import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'John', description: 'Имя пользователя' })
    readonly name: string;

    @ApiProperty({ example: 'Doe', description: 'Фамилия пользователя' })
    readonly secondName: string;

    @ApiProperty({ example: 'uuid-for-gun', description: 'UUID ружья', required: false })
    readonly gun?: string;

    @ApiProperty({ example: 'uuid-for-target', description: 'UUID мишени', required: false })
    readonly target?: string;

    @ApiProperty({ example: 10, description: 'Количество выстрелов', required: false })
    readonly shots?: number;
}

export class UpdateUserDto {
    @ApiProperty({ example: 'John', description: 'Имя пользователя', required: false })
    readonly name?: string;

    @ApiProperty({ example: 'Doe', description: 'Фамилия пользователя', required: false })
    readonly secondName?: string;

    @ApiProperty({ example: 'uuid-for-gun', description: 'UUID ружья', required: false })
    readonly gun?: string;

    @ApiProperty({ example: 'uuid-for-target', description: 'UUID мишени', required: false })
    readonly target?: string;

    @ApiProperty({ example: 10, description: 'Количество выстрелов', required: false })
    readonly shots?: number;
}
