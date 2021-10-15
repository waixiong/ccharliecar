import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarInventorySchema } from './inventory.scheme';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CarInventory', schema: CarInventorySchema },
    ]),
  ],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
