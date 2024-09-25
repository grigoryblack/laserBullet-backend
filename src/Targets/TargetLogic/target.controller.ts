import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {Target} from "../../database/Entity/Targets/target.entity";
import {TargetService} from "./target.service";
import {CreateTargetDto, UpdateTargetDto} from "./target.dto";


@ApiTags('Targets')
@Controller('targets')
export class TargetController {
    constructor(private readonly targetService: TargetService) {}

    @Get()
    @ApiOperation({ summary: 'Получить список всех мишеней' })
    @ApiResponse({ status: 200, description: 'Список мишеней успешно получен', type: [Target] })
    findAll() {
        return this.targetService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Получить мишень по ID' })
    @ApiResponse({ status: 200, description: 'Мишень успешно найдена', type: Target })
    @ApiResponse({ status: 404, description: 'Мишень не найдена' })
    findOne(@Param('id') id: string) {
        return this.targetService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Создать новую мишень' })
    @ApiResponse({ status: 201, description: 'Мишень успешно создана', type: Target })
    @ApiResponse({ status: 400, description: 'Ошибка при создании мишени' })
    create(@Body() createTargetDto: CreateTargetDto) {
        return this.targetService.create(createTargetDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Обновить мишень по ID' })
    @ApiResponse({ status: 200, description: 'Мишень успешно обновлена', type: Target })
    @ApiResponse({ status: 404, description: 'Мишень не найдена' })
    update(@Param('id') id: string, @Body() updateTargetDto: UpdateTargetDto) {
        return this.targetService.update(id, updateTargetDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Удалить мишень по ID (мягкое удаление)' })
    @ApiResponse({ status: 204, description: 'Мишень успешно удалена' })
    @ApiResponse({ status: 404, description: 'Мишень не найдена' })
    remove(@Param('id') id: string) {
        return this.targetService.remove(id);
    }
}
