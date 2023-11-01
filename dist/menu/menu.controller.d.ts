import { CreateMenuDto } from 'src/menu/dtos/create.menu.dto';
import { EditMenuDto } from './dtos/edit.menu.dto';
import { MenuService } from './menu.service';
import { GetMenuDto } from './dtos/get.menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    getMenu(res: any, param: GetMenuDto): Promise<any>;
    allMenu(res: any): Promise<any>;
    createMenu(res: any, request: CreateMenuDto): Promise<any>;
    editMenu(res: any, request: EditMenuDto): Promise<any>;
    deleteMenu(res: any, id: string): Promise<any>;
}
