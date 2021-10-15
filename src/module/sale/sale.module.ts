import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleSchema } from './sale.scheme';
import { InventoryService } from '../inventory/inventory.service';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';
import { InventoryModule } from '../inventory/inventory.module';
import { CarInventorySchema } from '../inventory/inventory.scheme';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CarInventory', schema: CarInventorySchema },
    ]),
    MongooseModule.forFeature([{ name: 'Sale', schema: SaleSchema }]),
    InventoryModule,
  ],
  controllers: [SaleController],
  providers: [InventoryService, SaleService],
})
export class SaleModule {}
