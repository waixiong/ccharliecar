import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleRequestDto {
  @ApiProperty()
  carId: string;

  constructor(data: CreateSaleRequestDto) {
    Object.assign(this, data);
  }
}
