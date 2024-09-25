import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {GunService} from "./gun.service";
import {Gun} from "../../database/Entity/Guns/gun.entity";
import {CreateGunDto, UpdateGunDto} from "./gun.dto";


@ApiTags('Guns')
@Controller('guns')
export class GunController {
    constructor(private readonly gunService: GunService) {}

    @Get()
    @ApiOperation({ summary: 'Получить список всех ружей' })
    @ApiResponse({ status: 200, description: 'Список ружей успешно получен', type: [Gun] })
    findAll() {
        return this.gunService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Получить ружье по ID' })
    @ApiResponse({ status: 200, description: 'Ружье успешно найдено', type: Gun })
    @ApiResponse({ status: 404, description: 'Ружье не найдено' })
    findOne(@Param('id') id: string) {
        return this.gunService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Создать новое ружье' })
    @ApiResponse({ status: 201, description: 'Ружье успешно создано', type: Gun })
    @ApiResponse({ status: 400, description: 'Ошибка при создании ружья' })
    create(@Body() createGunDto: CreateGunDto) {
        return this.gunService.create(createGunDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Обновить ружье по ID' })
    @ApiResponse({ status: 200, description: 'Ружье успешно обновлено', type: Gun })
    @ApiResponse({ status: 404, description: 'Ружье не найдено' })
    update(@Param('id') id: string, @Body() updateGunDto: UpdateGunDto) {
        return this.gunService.update(id, updateGunDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Удалить ружье по ID (мягкое удаление)' })
    @ApiResponse({ status: 204, description: 'Ружье успешно удалено' })
    @ApiResponse({ status: 404, description: 'Ружье не найдено' })
    remove(@Param('id') id: string) {
        return this.gunService.remove(id);
    }
}
