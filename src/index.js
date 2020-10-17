import express from 'express';
import bodyParser from 'body-parser';
import {logRequestMiddleware, logResultsMiddleware, logError} from "./logger/logger.js";
import middlewareFactory from "askql/askExpressMiddleware/askExpressMiddleware.js";
import askql from 'askql';

const {resources} = askql;
const values = {
    names: ['Johnny', 'Rita', 'Jane', 'Martha', 'Clark'],
    powers: ['Nerd', 'C#', 'Cool', 'Superman\'s mom', 'Superman']
};

const {askExpressMiddleware} = middlewareFactory;

const askMiddleware = askExpressMiddleware({resources, values}, {callNext: true, passError: true});
const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.post('/ask', [logRequestMiddleware, askMiddleware, logResultsMiddleware, logError]);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
