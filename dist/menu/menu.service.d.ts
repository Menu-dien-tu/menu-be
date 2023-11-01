/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Menu, MenuDocument } from 'src/schema/menu.schema';
import { Model } from 'mongoose';
import { CreateMenuDto } from './dtos/create.menu.dto';
import { EditMenuDto } from './dtos/edit.menu.dto';
import { GetMenuDto } from './dtos/get.menu.dto';
export declare class MenuService {
    private readonly menuModel;
    constructor(menuModel: Model<MenuDocument>);
    getMenu(param: GetMenuDto): Promise<import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllMenu(): Promise<(import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createMenu(request: CreateMenuDto): Promise<import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    editMenu(body: EditMenuDto): Promise<import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteMenu(id: string): Promise<import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
