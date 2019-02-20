import { Context } from "koa";
import Database from "../models/database";

export async function list(ctx: Context) {
  const page = ctx.request.body.page || 1;
  const itemInList = Number(process.env.ITEM_IN_RESPONSE);

  try {
    const databases = await Database.find()
      .limit(itemInList)
      .skip(page * itemInList)
      .exec();

    ctx.body = databases;
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      error: {
        type: "Unexpected",
        message: "Непредвиденная ошибка"
      }
    };
  }
}

export async function read(ctx: Context) {
  const id = ctx.params.id;

  try {
    const database = await Database.findById(id).exec();
    ctx.body = database;
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      error: {
        type: "Unexpected",
        message: "Непредвиденная ошибка"
      }
    };
  }
}

export async function update(ctx: Context) {}

export async function remove(ctx: Context) {}
