import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/User';

// GET /api/users — Admin sees all, General User sees only themselves
export const getUsers = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {
    const delay = parseInt(req.query['delay'] as string) || 0;
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, Math.min(delay, 5000)));
    }

    if (req.user?.role === 'Admin') {
      const users = await User.find().select('-password').sort({ createdAt: -1 });
      res.json(users);
    } else {
      const user = await User.findById(req.user?.id).select('-password');
      res.json(user ? [user] : []);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// GET /api/users/:id
export const getUserById = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params['id']).select('-password');
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// POST /api/users — Admin only
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role, department, status, joinedDate } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      res.status(400).json({ message: 'Email already registered' });
      return;
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role, department, status, joinedDate });
    const { password: _, ...safeUser } = user.toObject();
    res.status(201).json(safeUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// PUT /api/users/:id — Admin only
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { password, ...rest } = req.body;
    const updateData: Record<string, unknown> = { ...rest };

    if (password) {
      updateData['password'] = await bcrypt.hash(password, 10);
    }

    const user = await User.findByIdAndUpdate(req.params['id'], updateData, { new: true }).select('-password');
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// DELETE /api/users/:id — Admin only
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params['id']);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};