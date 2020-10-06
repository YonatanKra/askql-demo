import express  from 'express';
import bodyParser from 'body-parser';
import {logRequestMiddleware, logResultsMiddleware, logError} from "./logger/logger.js";

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.post('/ask', [logRequestMiddleware, logResultsMiddleware, logError]);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
