import { ApiProperty } from '@nestjs/swagger';

export class InventoryRequestDto {
  @ApiProperty()
  sku: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  model: string;

  @ApiProperty()
  name: string;

  constructor(data: InventoryRequestDto) {
    Object.assign(this, data);
  }
}
