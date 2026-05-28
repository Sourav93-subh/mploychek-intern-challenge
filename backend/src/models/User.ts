import mongoose, { Document, Schema } from 'mongoose';

export type UserRole = 'Admin' | 'General User';
export type UserStatus = 'Active' | 'Inactive';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  department: string;
  status: UserStatus;
  joinedDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'General User'], default: 'General User' },
    department: { type: String, required: true },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    joinedDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', UserSchema);