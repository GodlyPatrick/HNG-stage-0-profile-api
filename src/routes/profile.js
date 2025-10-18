import { Router } from 'express';
const router = Router();
import { getProfile } from '../controllers/profileController.js';

router.get('/me', getProfile);

export default router;