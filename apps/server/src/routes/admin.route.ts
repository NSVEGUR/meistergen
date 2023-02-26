import express from "express";
import Auth from "../controllers/auth.controller";
import Service from "../controllers/service.controller";
import AdminService from "../controllers/admin/service.controller";

const router = express.Router();

router.post("/signup", Auth.signup);
router.post("/login", Auth.login);
router.use(Auth.protect);
router.get("/", Auth.get);
router.get("/services", Service.protect, Service.getAll);
router.post("/services", AdminService.create);
router.delete("/services/:service", AdminService.remove);

export default router;
