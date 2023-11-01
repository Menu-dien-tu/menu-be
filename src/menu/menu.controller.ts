/*
https://docs.nestjs.com/controllers#controllers
*/ import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CreateMenuDto } from 'src/menu/dtos/create.menu.dto';
import { EditMenuDto } from './dtos/edit.menu.dto';
import { MenuService } from './menu.service';
import { ApiTags } from '@nestjs/swagger';
import { GetMenuDto } from './dtos/get.menu.dto';

@Controller('menu')
@ApiTags('MenuEndpoints')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async getMenu(@Res() res, @Query() param: GetMenuDto) {
    const result = await this.menuService.getMenu(param);
    return res.status(HttpStatus.OK).json(result);
  }

  @Get('/all')
  async allMenu(@Res() res) {
    const result = await this.menuService.getAllMenu();
    return res.status(HttpStatus.OK).json(result);
  }

  @Post('/create')
  async createMenu(@Res() res, @Body() request: CreateMenuDto) {
    const result = await this.menuService.createMenu(request);
    return res.status(HttpStatus.OK).json(result);
  }

  @Post('/edit')
  async editMenu(@Res() res, @Body() request: EditMenuDto) {
    const result = await this.menuService.editMenu(request);
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete('/delete/:id')
  async deleteMenu(@Res() res, @Param('id') id: string) {
    const result = await this.menuService.deleteMenu(id);
    return res.status(HttpStatus.OK).json(result);
  }
}
