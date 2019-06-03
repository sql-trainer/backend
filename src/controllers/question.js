import { promisifyQuery } from '../db/mysql';
import Question from '../models/question';
import HelpError from '../helper/Error';
import { isValidQuery } from '../helper/sqlQuery';
import _ from 'lodash';

const isArrayEqual = (x, y) => {
    return _(x)
        .xorWith(y, _.isEqual)
        .isEmpty();
};

const isObjectEqual = (x, y) => {
    return _.isEqual(x, y);
};

export async function read(ctx) {
    const id = ctx.params.questionId;

    const question = await Question.findById(id)
        .populate('database')
        .exec();
    ctx.body = question;
}

export async function check(ctx) {
    const id = ctx.params.questionId;
    const sqlQuery = ctx.request.body.sql;

    if (isValidQuery(sqlQuery)) {
        const question = await Question.findById(id)
            .populate('database')
            .exec();

        try {
            const trueResult = await promisifyQuery(
                `USE ${question.database.name};` + question.answer.toLowerCase(),
            );
            const testResult = await promisifyQuery(`USE ${question.database.name};` + sqlQuery.toLowerCase());
            const success =
                trueResult.length === testResult.length
                    ? question.checkSorting
                        ? isObjectEqual(trueResult, testResult)
                        : isArrayEqual(trueResult, testResult)
                    : false;
            ctx.status = 200;
            ctx.body = {
                success,
                fields: Object.keys(testResult[0] || {}),
                rows: testResult,
            };
        } catch (err) {
            throw new HelpError({
                status: 400,
                error: {
                    type: 'QUERY_FAILED',
                    message: `Ошибка выполнения запроса`,
                },
            });
        }
    } else {
        throw new HelpError({
            status: 400,
            error: {
                type: 'QUERY_IS_NOT_VALID',
                message: `Ваш запрос не валидный`,
            },
        });
    }
}
