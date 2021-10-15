export interface ICarInventory {
  readonly _id?: string;
  timestamp?: Date;
  readonly sku: string;
  price: number;
  carModel: string;
  name: string;
}

export interface IInventoryRequestDto {
  sku: string;
  price: number;
  model: string;
  name: string;
}