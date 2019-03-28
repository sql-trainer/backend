import { Context } from "koa";
import { promisifyQuery } from "../db/mysql";
import Question from "../models/question";
import HelpError from "../helper/Error";
import * as _ from "lodash";

const forbiddenWords = [
  "CREATE",
  "USE",
  "DESCRIBE",
  "ALTER",
  "DROP",
  "INSERT",
  "DELETE",
  "UPDATE",
  "SHOW",
  "RENAME",
  "TRANCATE",
  "CALL",
  "IMPORT",
  "LOAD",
  "REPLACE",
  "DO",
  "START",
  "COMMIT",
  "ROLLBACK",
  "LOCK",
  "SET",
  "PREPARE",
  "EXECUTE",
  "DEALLOCATE"
];

const isValidQuery = sql => {
  const sqlWords = sql
    .match(/([a-zа-я0-9.'"]+)/gi)
    .map(word => word.toUpperCase());
  for (const word of sqlWords) {
    if (forbiddenWords.includes(word)) {
      return false;
    }
  }
  return true;
};

const isArrayEqual = (x, y) => {
  return _(x)
    .xorWith(y, _.isEqual)
    .isEmpty();
};

const isObjectEqual = (x, y) => {
  return _.isEqual(x, y);
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
      const testResult = await promisifyQuery(
        `USE ${(question as any).database.name};` + sqlQuery
      );
      const success = (question as any).checkSorting
        ? isObjectEqual(trueResult, testResult)
        : isArrayEqual(trueResult, testResult);
      ctx.status = 200;
      ctx.body = {
        success,
        fields: Object.keys(testResult[0] || {}),
        rows: testResult
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
