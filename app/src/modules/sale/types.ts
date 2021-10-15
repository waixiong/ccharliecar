import { ICarInventory } from "../inventory/types";

export interface ISale {
  readonly _id: string;
  timestamp: Date;
  car: ICarInventory;
}