import { Context } from "koa";
import Question from "../models/question";

export async function read(ctx: Context) {
  const id = ctx.params.questionId;

  const question = await Question.findById(id)
    .populate("database")
    .exec();
  ctx.body = question;
}

export async function check(ctx: Context) {}
