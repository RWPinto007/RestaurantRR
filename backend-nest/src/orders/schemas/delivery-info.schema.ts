import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeliveryInfoDocument = DeliveryInfo & Document;

@Schema({ _id: false })
export class DeliveryInfo {
  @Prop({ required: true })
  address: string;

  @Prop({ required: true, type: Object }) // GPS coordinates
  gps: { lat: number; lng: number };

  @Prop({ required: true })
  deliveryType: string; // e.g., 'bike', 'car', 'pickup'

  @Prop({ default: 'pending' })
  status: 'pending' | 'on_the_way' | 'delivered' | 'cancelled';

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const DeliveryInfoSchema = SchemaFactory.createForClass(DeliveryInfo);
