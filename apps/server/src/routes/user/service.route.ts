import express from 'express';
import Service from '../../controllers/service.controller';
import FileService from '../../utils/file.util';
import User from '../../controllers/user/user.controller';

const router = express.Router();

router.route('/').get(User.getPersonal);
router.route('/available').get(User.getAvailable);
router.get('/all', User.getAll);
router.post(
  '/available/:service',
  Service.protect,
  FileService.upload.array('files'),
  User.applyService
);
router.get('/available/:service', Service.get);
router.get('/:request', Service.serviceRequestProtect, User.getService);

export default router;
