import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: UserRole.USER, enum: UserRole })
  role: UserRole;
  id: any;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Add virtual 'id' field
UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are included when converting to JSON or objects
UserSchema.set('toJSON', {
  virtuals: true,
});
UserSchema.set('toObject', {
  virtuals: true,
});
