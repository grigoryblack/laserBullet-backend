import { ApiProperty } from '@nestjs/swagger';

export class CreateGunDto {
    @ApiProperty({ description: 'Идентификатор ружья', example: 'gun-001' })
    currentID: string;
}

export class UpdateGunDto {
    @ApiProperty({ description: 'Идентификатор ружья', example: 'gun-001', required: false })
    currentID?: string;
}
