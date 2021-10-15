import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ICarInventory } from './inventory.interface';

// export type CarModelDocument = CarModel & Document;
export type CarInventoryDocument = CarInventory & Document;
// ObjectId = mongoose.Types.ObjectId;

// @Schema()
// export class CarModel {
//   constructor(data: Partial<CarModel> = {}) {
//     Object.assign(this, data);
//   }

//   @Prop({ required: true })
//   readonly _id: string; // sku

//   @Prop({ required: true })
//   price: number;

//   @Prop({ required: true })
//   model: string;

//   @Prop({ required: true })
//   name: string;
// }

@Schema()
export class CarInventory implements ICarInventory {
  constructor(data: Partial<CarInventory> = {}) {
    Object.assign(this, data);
  }

  @Prop({
    default: () => new mongoose.Types.ObjectId(),
  })
  readonly _id: string;

  @Prop({ required: true })
  timestamp: Date;

  @Prop({ required: true })
  carModel: string;

  @Prop({ required: true })
  sku: string; // sku

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  name: string;
}

// export const CarModelSchema = SchemaFactory.createForClass(CarModel);
export const CarInventorySchema = SchemaFactory.createForClass(CarInventory);
