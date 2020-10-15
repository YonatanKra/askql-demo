import express from 'express';
import bodyParser from 'body-parser';
import {logRequestMiddleware, logResultsMiddleware, errorHandler} from "./logger/logger.js";
import {askMiddleware} from "./askql/askql.js";

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.post('/ask', [logRequestMiddleware, askMiddleware, logResultsMiddleware, errorHandler]);
app.listen(port, () => {
    console.log(`AskQL listening at http://localhost:${port}`);
});
