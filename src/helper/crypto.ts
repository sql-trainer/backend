import { randomBytes } from "crypto";
import { createObjectId } from "pow-mongodb-fixtures";

export function getMongoID() {
  return createObjectId(randomBytes(12).toString("hex"));
}
