import express from 'express';
import Auth from '../../controllers/auth.controller';
import ServiceRouter from './service.route';

const router = express.Router();

router.post('/signup', Auth.signup);
router.post('/login', Auth.login);
router.use(Auth.protect);
router.get('/', Auth.get);
router.use('/services', ServiceRouter);

export default router;
