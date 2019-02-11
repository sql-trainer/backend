import * as Router from "koa-router";

import { router as question } from "./question";
// import { list, read, update, delete } from '../controllers/test';

const router = new Router();

// router.get("/", list);
// router.get("/:testId", read);
// router.put("/:testId", update);
// router.delete("/:testId", delete);

router.use("/:testId/questions", question.routes());

export { router };
