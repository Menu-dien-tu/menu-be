/*
https://docs.nestjs.com/providers#services
*/

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Menu, MenuDocument } from 'src/schema/menu.schema';
import { Model } from 'mongoose';
import { CreateMenuDto } from './dtos/create.menu.dto';
import { EditMenuDto } from './dtos/edit.menu.dto';
import { GetMenuDto } from './dtos/get.menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu.name)
    private readonly menuModel: Model<MenuDocument>,
  ) {}

  async getMenu(param: GetMenuDto) {
    const { id, name }: GetMenuDto = param;
    const queryMenu: any = {};
    if (id) {
      queryMenu._id = id;
    }
    if (name) {
      queryMenu.name = name;
    }
    const menu = await this.menuModel.findOne(queryMenu);
    return menu;
  }

  async getAllMenu() {
    const allMenu = await this.menuModel.find();
    return allMenu;
  }

  async createMenu(request: CreateMenuDto) {
    if (request.price == 0) {
      throw new BadRequestException('Price not null or equal zero');
    }
    const newMenu = new this.menuModel({
      ...request,
    });
    await newMenu.save();
    return newMenu;
  }

  async editMenu(body: EditMenuDto) {
    const { id, name, price, type }: EditMenuDto = body;
    const queryMenu: any = {};
    if (name) {
      queryMenu.name = name;
    }
    if (price) {
      queryMenu.price = price;
    }
    if (type) {
      queryMenu.type = type;
    }
    const editedMenu = await this.menuModel.findByIdAndUpdate(
      id,
      { ...queryMenu },
      { upsert: true, returnDocument: 'after' },
    );
    return editedMenu;
  }
  async deleteMenu(id: string) {
    const deletedMenu = await this.menuModel.findById(id);
    if (!deletedMenu) {
      throw new NotFoundException();
    }
    await this.menuModel.deleteOne({ _id: id });
    console.log(deletedMenu);
    return deletedMenu;
  }
}
