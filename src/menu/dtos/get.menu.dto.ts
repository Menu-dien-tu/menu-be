import { ApiProperty } from '@nestjs/swagger';

export class GetMenuDto {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false })
  name: string;
}
