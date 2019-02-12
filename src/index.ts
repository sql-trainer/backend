import * as Koa from "koa";
import * as ip from "ip";
import * as bodyParser from "koa-bodyparser";
import * as env from "dotenv";

import "./db";
import router from "./routes";
import errorMiddleware from "./middleware/error";

env.config();

const app = new Koa();
const address = ip.address();
const port = Number(process.env.SERVER_PORT);

app.use(router);
app.use(bodyParser());
app.use(errorMiddleware);

app.listen(port, address, () => {
  console.log(`Server running on port ${address}:${port}`);
});
