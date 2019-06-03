import Database from "../models/database";
import HelpError from "../helper/Error";

export async function list(ctx) {
  const dbGroup = ctx.params.dbGroup;
  const page = ctx.request.query.page || 0;
  const itemInList = Number(process.env.ITEM_IN_RESPONSE);

  if (dbGroup === "open") {
    const databases = await Database.find()
      .limit(itemInList)
      .skip(page * itemInList)
      .exec();

    ctx.body = databases;
  } else {
    throw new HelpError({
      status: 400,
      error: {
        type: "DBGROUP_IS_NOT_FOUND",
        message: `Группа баз данных под названием ${dbGroup} не найдена`
      }
    });
  }
}

export async function read(ctx) {
  const id = ctx.params.dbId;
  const dbGroup = ctx.params.dbGroup;
  if (dbGroup === "open") {
    const database = await Database.findById(id).exec();
    ctx.body = database;
  } else {
    throw new HelpError({
      status: 400,
      error: {
        type: "DBGROUP_IS_NOT_FOUND",
        message: `Группа баз данных под названием ${dbGroup} не найдена`
      }
    });
  }
}
