import * as Koa from "koa";
import * as ip from "ip";
import * as config from "config";
import * as bodyParser from "koa-bodyparser";

import router from "./routes";

const app = new Koa();
const address = ip.address();
const port = config.get("server.port") as number;

app.use(router);
app.use(bodyParser());

app.listen(port, address, () => {
  console.log(`Server running on port ${address}:${port}`);
});
