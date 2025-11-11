import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DeliveryInfoDocument = DeliveryInfo & Document;

@Schema({ _id: false })
export class DeliveryInfo {
  @Prop({ required: true })
  address: string;

  @Prop({ required: true, type: Object }) // GPS coordinates
  gps: {
    lat: number;
    lng: number;
  };

  @Prop({ required: true })
  deliveryType: 'bike' | 'car' | 'pickup';

  @Prop({ default: 'pending' })
  status: 'pending' | 'on_the_way' | 'delivered' | 'cancelled';

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const DeliveryInfoSchema = SchemaFactory.createForClass(DeliveryInfo);

// --------------------- Order Schema ---------------------

export type OrderDocument = Order & Document;

export enum OrderStatus {
  PENDING = 'pending',
  ON_THE_WAY = 'on_the_way',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ required: true, type: [{ name: String, quantity: Number, price: Number }] })
  items: { name: string; quantity: number; price: number }[];

  @Prop({ type: DeliveryInfoSchema, required: true })
  deliveryInfo: DeliveryInfo;

  @Prop({ default: OrderStatus.PENDING, enum: OrderStatus })
  status: OrderStatus;

  @Prop({ default: 0 })
  totalPrice: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
