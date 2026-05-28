import { Router } from 'express';
import { getRecords, createRecord, updateRecord, deleteRecord } from '../controllers/recordController';
import { authenticate, authorizeAdmin } from '../middleware/auth';

const router = Router();

router.get('/', authenticate, getRecords);
router.post('/', authenticate, authorizeAdmin, createRecord);
router.put('/:id', authenticate, authorizeAdmin, updateRecord);
router.delete('/:id', authenticate, authorizeAdmin, deleteRecord);

export default router;