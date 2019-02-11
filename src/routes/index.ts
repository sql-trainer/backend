import * as Router from "koa-router";
import { router as db } from "./db";
import { router as test } from "./test";

const router = new Router({
  prefix: "/api/v1"
});

router.use("/db", db.routes());
router.use("/tests", test.routes());

export { router };
