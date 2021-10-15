import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { InventoryService } from '../inventory/inventory.service';
import { CreateSaleRequestDto } from './sale.dto';
import { Sale, SaleDocument } from './sale.scheme';

@Injectable()
export class SaleService {
  constructor(
    @InjectModel('Sale')
    private readonly saleModel: Model<SaleDocument>,
    @InjectConnection() private connection: Connection,
    private readonly inventoryService: InventoryService,
  ) {}

  async getAllSales(): Promise<Sale[]> {
    const sales = await this.saleModel.find().exec();
    return sales;
  }

  async getSalesPagination(page: number, count: number): Promise<Sale[]> {
    const sales = await this.saleModel
      .find()
      .skip(page * count)
      .limit(count)
      .exec();
    return sales;
  }

  async createSales(request: CreateSaleRequestDto): Promise<Sale> {
    const car = await this.inventoryService.getInventory(request.carId);
    const sale = new Sale({
      car: car,
      timestamp: new Date(),
    });
    const createdSale = new this.saleModel(sale);
    const result = createdSale.save();
    await this.inventoryService.deleteInventory(request.carId);
    return result;
  }
}
