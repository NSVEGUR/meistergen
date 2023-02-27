import express from 'express';
import Auth from '../../controllers/auth.controller';

const router = express.Router();

router.post('/signup', Auth.signup);
router.post('/login', Auth.login);
router.use(Auth.protect, Auth.employeeShield);
router.get('/', Auth.get);

export default router;
