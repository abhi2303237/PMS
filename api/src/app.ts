import * as express from 'express';
import * as bodyParser from "body-parser";
import "reflect-metadata";
// const dbOptions = require("./configs/app-config");
import { router } from './routes/api'
import * as env from './configs/env';
import * as http from 'http'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app)

/**
 * Primary app routes.
 */
app.use("/api/v1/", router);

server.listen(env.port, () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), env.port, app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});

console.log('Environment variables ====> ', env)


export default app;