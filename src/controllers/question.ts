import { Context } from "koa";
import { promisifyQuery } from "../db/mysql";
import Question from "../models/question";
import HelpError from "../helper/Error";

const forbiddenWords = [
  "CREATE",
  "USE",
  "DESCRIBE",
  "ALTER",
  "DROP",
  "INSERT",
  "DELETE",
  "UPDATE",
  "SHOW"
];
const isValidQuery = sql => {
  const sqlWords = sql
    .match(/([a-zа-я0-9.]+)/gi)
    .map(word => word.toUpperCase());
  for (const word of sqlWords) {
    if (forbiddenWords.includes(word)) {
      return false;
    }
  }
  return true;
};

export async function read(ctx: Context) {
  const id = ctx.params.questionId;

  const question = await Question.findById(id)
    .populate("database")
    .exec();
  ctx.body = question;
}

export async function check(ctx: Context) {
  const id = ctx.params.questionId;
  const sqlQuery = ctx.request.body.sql;
  if (isValidQuery(sqlQuery)) {
    const question = await Question.findById(id)
      .populate("database")
      .exec();

    try {
      const trueResult = await promisifyQuery(
        `USE ${(question as any).database.name};` + (question as any).answer
      );
      const strTrueResult = JSON.stringify(trueResult);
      const testResult = await promisifyQuery(
        `USE ${(question as any).database.name};` + sqlQuery
      );
      const strTestResult = JSON.stringify(testResult);
      const success = strTrueResult === strTestResult;
      ctx.status = 200;
      ctx.body = {
        success,
        result: testResult
      };
    } catch (err) {
      throw new HelpError({
        status: 400,
        error: {
          type: "QUERY_FAILED",
          message: `Ошибка выполнения запроса`
        }
      });
    }
  } else {
    throw new HelpError({
      status: 400,
      error: {
        type: "QUERY_IS_NOT_VALID",
        message: `Ваш запрос не валидный`
      }
    });
  }
}
