import * as Koa from "koa";
import * as ip from "ip";
import * as bodyParser from "koa-bodyparser";
import * as env from "dotenv";

env.config();

import "./db";
import router from "./routes";
import errorMiddleware from "./middleware/error";

const app = new Koa();
const address = ip.address();
const port = Number(process.env.SERVER_PORT);

app.use(errorMiddleware);
app.use(bodyParser());
app.use(router);

app.listen(port, address, () => {
  console.log(`Server running on port ${address}:${port}`);
});
