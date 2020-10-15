import askql from "askql";
import {values} from '../resources/index.js';
import middlewareFactory from "askql/askExpressMiddleware/askExpressMiddleware.js";

const { askExpressMiddleware } = middlewareFactory;
const { resources } = askql;
export const askMiddleware = askExpressMiddleware(
    { resources, values },
    { callNext: true, passError: true }
);