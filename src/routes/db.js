import Router from "koa-router";
import { list, read } from "../controllers/db";

const router = new Router();

router.get("/:dbGroup/", list);
router.get("/:dbGroup/:dbId", read);

export default router.routes();
