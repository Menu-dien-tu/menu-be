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
exports.MenuController = void 0;
const common_1 = require("@nestjs/common");
const create_menu_dto_1 = require("./dtos/create.menu.dto");
const edit_menu_dto_1 = require("./dtos/edit.menu.dto");
const menu_service_1 = require("./menu.service");
const swagger_1 = require("@nestjs/swagger");
const get_menu_dto_1 = require("./dtos/get.menu.dto");
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    async getMenu(res, param) {
        const result = await this.menuService.getMenu(param);
        return res.status(common_1.HttpStatus.OK).json(result);
    }
    async allMenu(res) {
        const result = await this.menuService.getAllMenu();
        return res.status(common_1.HttpStatus.OK).json(result);
    }
    async createMenu(res, request) {
        const result = await this.menuService.createMenu(request);
        return res.status(common_1.HttpStatus.OK).json(result);
    }
    async editMenu(res, request) {
        const result = await this.menuService.editMenu(request);
        return res.status(common_1.HttpStatus.OK).json(result);
    }
    async deleteMenu(res, id) {
        const result = await this.menuService.deleteMenu(id);
        return res.status(common_1.HttpStatus.OK).json(result);
    }
};
exports.MenuController = MenuController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_menu_dto_1.GetMenuDto]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "getMenu", null);
__decorate([
    (0, common_1.Get)('/all'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "allMenu", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_menu_dto_1.CreateMenuDto]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "createMenu", null);
__decorate([
    (0, common_1.Post)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, edit_menu_dto_1.EditMenuDto]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "editMenu", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "deleteMenu", null);
exports.MenuController = MenuController = __decorate([
    (0, common_1.Controller)('menu'),
    (0, swagger_1.ApiTags)('MenuEndpoints'),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuController);
//# sourceMappingURL=menu.controller.js.map