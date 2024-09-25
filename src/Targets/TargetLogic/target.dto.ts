import { ApiProperty } from '@nestjs/swagger';

export class CreateTargetDto {
    @ApiProperty({ description: 'Идентификатор мишени', example: 'target-001' })
    currentID: string;
}

export class UpdateTargetDto {
    @ApiProperty({ description: 'Идентификатор мишени', example: 'target-001', required: false })
    currentID?: string;
}