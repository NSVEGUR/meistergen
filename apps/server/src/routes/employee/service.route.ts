import express from 'express';
import Employee from '../../controllers/employee/employee.controller';
import Service from '../../controllers/service.controller';

const router = express.Router();

router.get('/', Employee.getServiceRequests);
router.get('/:request', Service.serviceRequestProtect, Employee.getServiceRequest);

export default router;
