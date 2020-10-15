import chalk from 'chalk';

export async function logRequestMiddleware(req, res, next) {
    const data = req.body;
    console.log('Body: ', req.body);
    const {code} = data;

    console.log('Code: ', chalk.grey(`➡️ ${code}`));
    const originalJson = res.json;
    res.json = function (obj) {
        res.locals.askResult = obj;
        res.json = originalJson;
        return res.json(obj);
    };
    return next();
}

export async function logResultsMiddleware(req, res, next) {
    console.log(chalk.grey(`⬅️ ${JSON.stringify(res.locals.askResult)}`));
    return next();
}

export async function errorHandler(error, req, res, next) {
    res.json(error.message);
    throw error;
}