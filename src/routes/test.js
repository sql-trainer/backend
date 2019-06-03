import Router from "koa-router";

import question from "./question";
import { list, read, getMeta } from "../controllers/test";

const router = new Router();

router.get("/", list);
router.get("/:testId", read);
router.get("/:testId/meta", getMeta);
router.use("/:testId/questions", question);

export default router.routes();
