import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Logger,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { ApiTags } from '@nestjs/swagger';
import { ICarInventory } from './inventory.interface';
import { InventoryRequestDto } from './inventory.dto';

@ApiTags('api/inventory')
@Controller('api/inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  async getAllInventories(): Promise<ICarInventory[]> {
    return this.inventoryService.getAllInventories();
  }

  @Post()
  async createInventory(
    @Body() body: InventoryRequestDto,
  ): Promise<ICarInventory> {
    return this.inventoryService.createInventory(body);
  }

  @Put(':id')
  async updateInventory(
    @Param('id') id: string,
    @Body() body: InventoryRequestDto,
  ): Promise<ICarInventory> {
    return this.inventoryService.updateInventory(id, body);
  }

  @Delete(':id')
  async deleteInventory(@Param('id') id: string): Promise<ICarInventory> {
    return this.inventoryService.deleteInventory(id);
  }
}
