import mongoose, { Document, Schema } from 'mongoose';

export type RecordStatus = 'Pending' | 'In Progress' | 'Completed' | 'Failed';
export type RecordPriority = 'Low' | 'Medium' | 'High';

export interface IRecord extends Document {
  title: string;
  status: RecordStatus;
  priority: RecordPriority;
  assignedTo: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const RecordSchema = new Schema<IRecord>(
  {
    title: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed', 'Failed'], default: 'Pending' },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export const Record = mongoose.model<IRecord>('Record', RecordSchema);