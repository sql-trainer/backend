import * as Router from "koa-router";
import { read } from "../controllers/question";

const router = new Router();

router.get("/:questionId", read);
// router.post("/:questionId/check", check);

export default router.routes();
