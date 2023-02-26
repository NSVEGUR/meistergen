import express from 'express';
import Service from '../controllers/service.controller';
import FileService from '../utils/file.util';
import User from '../controllers/user/user.controller';

const router = express.Router();

router.get('/', User.allServices);
router.route('/available').get(User.availableServices);
router.route('/applied').get(User.appliedServices);
router.route('/approved').get(User.approvedServices);

router.post(
  '/available/:service',
  Service.protect,
  FileService.upload.array('files'),
  User.applyService
);
router.get('/:service', Service.get);

export default router;
