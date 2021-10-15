import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ISale } from './sale.interface';
import { ICarInventory } from '../inventory/inventory.interface';

export type SaleDocument = Sale & Document;

export class CarSold implements ICarInventory {
  @Prop()
  _id?: string;
  @Prop({ required: true })
  timestamp: Date;
  @Prop({ required: true })
  sku: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  carModel: string;
  @Prop({ required: true })
  name: string;
}

@Schema()
export class Sale implements ISale {
  constructor(data: Partial<Sale> = {}) {
    Object.assign(this, data);
  }

  @Prop({ default: () => new mongoose.Types.ObjectId() })
  readonly _id: string;

  @Prop({ required: true })
  timestamp: Date;

  @Prop({ required: true })
  car: CarSold;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
