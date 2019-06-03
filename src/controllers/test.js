import Test from "../models/test";
import HelpError from "../helper/Error";

export async function list(ctx) {
  const page = ctx.request.query.page || 0;
  const itemInList = Number(process.env.ITEM_IN_RESPONSE);
  const tests = await Test.find({
    active: true,
    open: true
  })
    .limit(itemInList)
    .skip(page * itemInList)
    .exec();
  ctx.body = tests;
}

export async function read(ctx) {
  const id = ctx.params.testId;

  if (id === "open") {
    const test = await Test.findOne({
      title: "Open"
    })
      .populate("questions")
      .exec();
    test.questions = test.questions.map(question => question.getShort());
    ctx.body = test;
  } else {
    throw new HelpError({
      status: 400,
      error: {
        type: "TEST_IS_NOT_FOUND",
        message: `Тест под id = ${id} не найден`
      }
    });
  }
}

export async function getMeta(ctx) {
  const id = ctx.params.testId;

  if (id === "open") {
    const test = await Test.findOne({
      title: "Open"
    }).exec();
    const meta = test.getMeta();
    ctx.body = meta;
  } else {
    throw new HelpError({
      status: 400,
      error: {
        type: "TEST_IS_NOT_FOUND",
        message: `Тест под id = ${id} не найден`
      }
    });
  }
}