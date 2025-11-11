import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from './schemas/menu.schema';

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

  async create(data: Partial<Menu>) {
    const created = new this.menuModel(data);
    return created.save();
  }

  async findAll() {
    return this.menuModel.find().exec();
  }

  async findOne(id: string) {
    const item = await this.menuModel.findById(id).exec();
    if (!item) throw new NotFoundException('Menu item not found');
    return item;
  }

  async update(id: string, data: Partial<Menu>) {
    return this.menuModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async remove(id: string) {
    await this.menuModel.findByIdAndDelete(id).exec();
    return { deleted: true };
  }
}
