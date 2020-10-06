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
    if (req instanceof Error) {
        throw req;
    }
    console.log(chalk.grey(`⬅️ ${JSON.stringify(res.locals.askResult)}`));
}