import express from 'express';
import Employee from '../../controllers/employee/employee.controller';
import Service from '../../controllers/service.controller';

const router = express.Router();

router.get('/', Employee.getPersonal);
router.get('/available', Employee.getAvailable);
router.get('/all', Employee.getAll);
router.get('/available/:request', Service.serviceRequestProtect, Employee.getRequest);
router.post('/available/:request/approve', Service.serviceRequestProtect, Employee.approve);
router.post('/available/:request/decline', Service.serviceRequestProtect, Employee.decline);
router.get('/:request', Service.serviceRequestProtect, Employee.getRequest);
export default router;
