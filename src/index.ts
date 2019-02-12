import * as Koa from "koa";
import * as ip from "ip";
import * as config from "config";
import * as bodyParser from "koa-bodyparser";

import "./db";
import router from "./routes";
import errorMiddleware from "./middleware/error";

const app = new Koa();
const address = ip.address();
const port = config.get("server.port") as number;

app.use(router);
app.use(bodyParser());
app.use(errorMiddleware);

app.listen(port, address, () => {
  console.log(`Server running on port ${address}:${port}`);
});
