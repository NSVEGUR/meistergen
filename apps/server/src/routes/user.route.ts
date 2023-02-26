import express from "express";
import Auth from "../controllers/auth.controller";
import Service from "../controllers/service.controller";
import FileService from "../services/file.service";
import User from "../controllers/user/user.controller";
import ServiceRouter from "./service.route";

const router = express.Router();

router.get("/", Auth.protect, Auth.get);
router.post("/signup", Auth.signup);
router.post("/login", Auth.login);
router.use(Auth.protect, ServiceRouter);
router.post(
  "/services/apply/:service",
  Auth.protect,
  Service.protect,
  FileService.upload.array("files"),
  User.applyService
);

export default router;
