import { ApiProperty } from '@nestjs/swagger';

export class EditMenuDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  type: string;
}
