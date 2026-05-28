import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { User } from '../models/User';
import { Record } from '../models/Record';

dotenv.config();

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mploychek');
  console.log('Connected to MongoDB for seeding...');

  await User.deleteMany({});
  await Record.deleteMany({});

  const adminPassword = await bcrypt.hash('Admin@123', 10);
  const userPassword = await bcrypt.hash('User@123', 10);

  const admin = await User.create({
    name: 'Admin User',
    email: 'admin@mploychek.com',
    password: adminPassword,
    role: 'Admin',
    department: 'Engineering',
    status: 'Active',
    joinedDate: new Date('2023-01-15'),
  });

  const user1 = await User.create({
    name: 'Riya Sharma',
    email: 'riya@mploychek.com',
    password: userPassword,
    role: 'General User',
    department: 'Operations',
    status: 'Active',
    joinedDate: new Date('2023-06-01'),
  });

  const user2 = await User.create({
    name: 'Arjun Mehta',
    email: 'arjun@mploychek.com',
    password: userPassword,
    role: 'General User',
    department: 'Marketing',
    status: 'Active',
    joinedDate: new Date('2024-01-10'),
  });

  const user3 = await User.create({
    name: 'Priya Nair',
    email: 'priya@mploychek.com',
    password: userPassword,
    role: 'General User',
    department: 'HR',
    status: 'Inactive',
    joinedDate: new Date('2023-09-20'),
  });

  // Records for Admin (sees all)
  await Record.insertMany([
    { title: 'Background Check - Candidate A', status: 'Completed', priority: 'High', assignedTo: admin._id, createdAt: new Date() },
    { title: 'PAN Verification - Riya Sharma', status: 'Pending', priority: 'Medium', assignedTo: admin._id, createdAt: new Date() },
    { title: 'EPFO Check - Arjun Mehta', status: 'In Progress', priority: 'High', assignedTo: user1._id, createdAt: new Date() },
    { title: 'Court Record Lookup - Q1', status: 'Completed', priority: 'Low', assignedTo: user2._id, createdAt: new Date() },
    { title: 'Address Verification - Batch 3', status: 'Failed', priority: 'High', assignedTo: user1._id, createdAt: new Date() },
    { title: 'Education Verification - MBA 2023', status: 'In Progress', priority: 'Medium', assignedTo: user3._id, createdAt: new Date() },
  ]);

  console.log('✅ Seed complete!');
  console.log('---');
  console.log('Admin:        admin@mploychek.com / Admin@123');
  console.log('General User: riya@mploychek.com  / User@123');
  console.log('General User: arjun@mploychek.com / User@123');
  await mongoose.disconnect();
};

seed().catch(console.error);