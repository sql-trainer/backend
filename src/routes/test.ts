import * as Router from "koa-router";

import question from "./question";
// import { list, read, update, remove } from '../controllers/test';

const router = new Router();

// router.get("/", list);
// router.get("/:testId", read);
// router.put("/:testId", update);
// router.delete("/:testId", remove);

router.use("/:testId/questions", question);

export default router.routes();
