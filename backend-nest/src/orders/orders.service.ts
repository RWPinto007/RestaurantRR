import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async create(userId: string, items: any[]) {
    const total = items.reduce((s, it) => s + it.price * (it.qty || 1), 0);
    const created = new this.orderModel({ user: userId, items, total, status: 'created' });
    return created.save();
  }

  async findById(id: string) {
    const order = await this.orderModel.findById(id).exec();
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async updateDelivery(orderId: string, deliveryInfo: any) {
    return this.orderModel.findByIdAndUpdate(orderId, { deliveryInfo }, { new: true }).exec();
  }

  async markPaid(orderId: string) {
    return this.orderModel.findByIdAndUpdate(orderId, { paid: true }, { new: true }).exec();
  }
}
