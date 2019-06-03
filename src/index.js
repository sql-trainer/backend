import Koa from 'koa';
import ip from 'ip';
import bodyParser from 'koa-bodyparser';
import env from 'dotenv';
import cors from '@koa/cors';

env.config();
import './db';
import router from './routes';
import errorMiddleware from './middleware/error';

const app = new Koa();
const address = ip.address();
const port = Number(process.env.SERVER_PORT);

app.use(cors());

app.use(errorMiddleware);
app.use(bodyParser());
app.use(router);

app.listen(port, address, () => {
    console.log(`Server running on ${address}:${port}`);
});
