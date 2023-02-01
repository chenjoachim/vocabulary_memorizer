import { Router } from "express";
import WordRouter from "./wordRouter.js";
const router = Router();
router.use("/", WordRouter);
export default router;
