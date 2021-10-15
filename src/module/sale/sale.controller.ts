import { Controller, Get, Post, Body } from '@nestjs/common';
import { SaleService } from './sale.service';
import { ApiTags } from '@nestjs/swagger';
import { ISale } from './sale.interface';
import { CreateSaleRequestDto } from './sale.dto';

@ApiTags('api/sale')
@Controller('api/sale')
export class SaleController {
  constructor(private readonly inventoryService: SaleService) {}

  @Get()
  async getAllSale(): Promise<ISale[]> {
    return this.inventoryService.getAllSales();
  }

  @Post()
  async createSale(@Body() body: CreateSaleRequestDto): Promise<ISale> {
    return this.inventoryService.createSales(body);
  }
}
