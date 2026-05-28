import { Router } from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController';
import { authenticate, authorizeAdmin } from '../middleware/auth';

const router = Router();

router.get('/', authenticate, getUsers);
router.get('/:id', authenticate, authorizeAdmin, getUserById);
router.post('/', authenticate, authorizeAdmin, createUser);
router.put('/:id', authenticate, authorizeAdmin, updateUser);
router.delete('/:id', authenticate, authorizeAdmin, deleteUser);

export default router;