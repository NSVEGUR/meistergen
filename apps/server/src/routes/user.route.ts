import express from 'express';
import Auth from '../controllers/auth.controller';
import ServiceRouter from './service.route';

const router = express.Router();

router.get('/', Auth.protect, Auth.get);
router.post('/signup', Auth.signup);
router.post('/login', Auth.login);
router.use('/services', Auth.protect, ServiceRouter);

export default router;
