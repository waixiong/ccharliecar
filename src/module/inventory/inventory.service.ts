import { Logger, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { InventoryRequestDto } from './inventory.dto';
import { CarInventory, CarInventoryDocument } from './inventory.scheme';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel('CarInventory')
    private readonly carInventoryModel: Model<CarInventoryDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  async getAllInventories(): Promise<CarInventory[]> {
    const cars = await this.carInventoryModel.find().exec();
    return cars;
  }

  async getInventoriesPagination(
    page: number,
    count: number,
  ): Promise<CarInventory[]> {
    const cars = await this.carInventoryModel
      .find()
      .skip(page * count)
      .limit(count)
      .exec();
    return cars;
  }

  async createInventory(request: InventoryRequestDto): Promise<CarInventory> {
    const car = new CarInventory({
      sku: request.sku,
      price: request.price,
      carModel: request.model,
      name: request.name,
      timestamp: new Date(),
    });
    const createdCar = new this.carInventoryModel(car);
    return createdCar.save();
  }

  async getInventory(id: string): Promise<CarInventory> {
    const car = await this.carInventoryModel.findOne({ _id: id }).exec();
    if (car == null) {
      throw new NotFoundException();
    }
    return car;
  }

  async updateInventory(
    id: string,
    request: InventoryRequestDto,
  ): Promise<CarInventory> {
    const car = await this.carInventoryModel.findOne({ _id: id }).exec();
    if (car == null) {
      throw new NotFoundException();
    }
    car.sku = request.sku;
    car.price = request.price;
    car.name = request.name;
    car.carModel = request.model;
    return car.save();
  }

  async deleteInventory(id: string): Promise<CarInventory> {
    const car = await this.carInventoryModel.findOne({ _id: id }).exec();
    if (car == null) {
      throw new NotFoundException();
    }
    return car.delete();
  }
}
