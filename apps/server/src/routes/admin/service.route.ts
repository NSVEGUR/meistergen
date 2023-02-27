import express from 'express';
import Service from '../../controllers/service.controller';
import AdminService from '../../controllers/admin/service.controller';

const router = express.Router();

router.route('/').get(Service.getAll).post(AdminService.create);
router.route('/:service').get(Service.get).delete(AdminService.remove).patch(AdminService.update);

export default router;
