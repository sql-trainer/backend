import * as Router from "koa-router";

import question from "./question";
import { list, read } from "../controllers/test";

const router = new Router();

router.get("/", list);
router.get("/:testId", read);
router.use("/:testId/questions", question);

export default router.routes();
