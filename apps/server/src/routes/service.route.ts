import express from "express";
import Service from "../controllers/service.controller";

const router = express.Router();

router.route("/services").get(Service.getAll);
router.route("/services/:service").get(Service.get);

export default router;
