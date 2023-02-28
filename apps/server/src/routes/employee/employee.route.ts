import express from 'express';
import Auth from '../../controllers/auth.controller';
import ServiceRouter from './service.route';
import File from '../../controllers/file.controller';

const router = express.Router();

router.post('/signup', Auth.signup);
router.post('/login', Auth.login);
router.use(Auth.protect, Auth.employeeShield);
router.get('/', Auth.get);
router.use('/requests', ServiceRouter);
router.get('/file/:file', File.download);

export default router;
