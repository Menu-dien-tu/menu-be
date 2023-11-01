"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const menu_schema_1 = require("../schema/menu.schema");
const mongoose_2 = require("mongoose");
let MenuService = class MenuService {
    constructor(menuModel) {
        this.menuModel = menuModel;
    }
    async getMenu(param) {
        const { id, name } = param;
        const queryMenu = {};
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
    async createMenu(request) {
        if (request.price == 0) {
            throw new common_1.BadRequestException('Price not null or equal zero');
        }
        const newMenu = new this.menuModel({
            ...request,
        });
        await newMenu.save();
        return newMenu;
    }
    async editMenu(body) {
        const { id, name, price, type } = body;
        const queryMenu = {};
        if (name) {
            queryMenu.name = name;
        }
        if (price) {
            queryMenu.price = price;
        }
        if (type) {
            queryMenu.type = type;
        }
        const editedMenu = await this.menuModel.findByIdAndUpdate(id, { ...queryMenu }, { upsert: true, returnDocument: 'after' });
        return editedMenu;
    }
    async deleteMenu(id) {
        const deletedMenu = await this.menuModel.findById(id);
        if (!deletedMenu) {
            throw new common_1.NotFoundException();
        }
        await this.menuModel.deleteOne({ _id: id });
        console.log(deletedMenu);
        return deletedMenu;
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(menu_schema_1.Menu.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MenuService);
//# sourceMappingURL=menu.service.js.map