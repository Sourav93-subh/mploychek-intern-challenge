import { Request, Response } from 'express';
import { Record } from '../models/Record';

// GET /api/records — Admin sees all, General User sees only their own
export const getRecords = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {
    const delay = parseInt(req.query['delay'] as string) || 0;
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, Math.min(delay, 5000)));
    }

    const filter = req.user?.role === 'Admin' ? {} : { assignedTo: req.user?.id };
    const records = await Record.find(filter)
      .populate('assignedTo', 'name email department')
      .sort({ createdAt: -1 });

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// POST /api/records — Admin only
export const createRecord = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {
    const { title, status, priority, assignedTo } = req.body;
    const record = await Record.create({ title, status, priority, assignedTo });
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// PUT /api/records/:id — Admin only
export const updateRecord = async (req: Request, res: Response): Promise<void> => {
  try {
    const record = await Record.findByIdAndUpdate(req.params['id'], req.body, { new: true });
    if (!record) {
      res.status(404).json({ message: 'Record not found' });
      return;
    }
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// DELETE /api/records/:id — Admin only
export const deleteRecord = async (req: Request, res: Response): Promise<void> => {
  try {
    const record = await Record.findByIdAndDelete(req.params['id']);
    if (!record) {
      res.status(404).json({ message: 'Record not found' });
      return;
    }
    res.json({ message: 'Record deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};