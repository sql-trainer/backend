import { Context } from "koa";
import Question from "../models/question";
import HelpError from "../helper/Error";

// export async function list(ctx: Context) {
//   const testId = ctx.params.testId;
//   const page = ctx.request.query.page || 0;
//   const itemInList = Number(process.env.ITEM_IN_RESPONSE);

//   if (testId === "open") {
//     const questions = await Question.find({
//       open: true,
//       active: true
//     })
//       .limit(itemInList)
//       .skip(page * itemInList)
//       .exec();

//     // FIXME
//     ctx.body = questions.map(question => (question as any).getShort());
//   } else {
//     throw new HelpError({
//       status: 400,
//       error: {
//         type: "TEST_ID_IS_NOT_FOUND",
//         message: `Тест с id ${testId} не найден`
//       }
//     });
//   }
// }

export async function read(ctx: Context) {
  const id = ctx.params.questionId;

  const question = await Question.findById(id).exec();
  ctx.body = question;
}
