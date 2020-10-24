import askql from "askql";
import {values} from '../resources/index.js';
import middlewareFactory from "askql/askExpressMiddleware/askExpressMiddleware.js";
import { customResources } from "./statewise.js";

const { askExpressMiddleware } = middlewareFactory;
const { resources } = askql;
export const askMiddleware = askExpressMiddleware(
    { resources: {...resources, ...customResources}, values },
    { callNext: true, passError: true }
);