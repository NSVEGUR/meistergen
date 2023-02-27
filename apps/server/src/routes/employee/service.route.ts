import express from 'express';
import Employee from '../../controllers/employee/employee.controller';

const router = express.Router();

router.get('/', Employee.getServiceRequests);
router.get('/:service', Employee.getServiceRequest);

export default router;
