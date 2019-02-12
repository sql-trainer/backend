import * as Router from "koa-router";

import db from "./db";
import test from "./test";

const router = new Router({
  prefix: "/api/v1"
});

router.use("/db", db);
router.use("/tests", test);

export default router.routes();
