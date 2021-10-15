import { ICarInventory } from '../inventory/inventory.interface';

export interface ISale {
  readonly _id: string;
  timestamp: Date;
  car: ICarInventory;
}
