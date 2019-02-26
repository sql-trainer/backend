import { Schema, model } from "mongoose";
import { pick } from "lodash";

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  database: {
    type: Schema.Types.ObjectId,
    ref: "Database",
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  open: {
    type: Boolean,
    default: false
  }
});

QuestionSchema.methods.getShort = function() {
  return pick(this, ["_id", "question", "database"]);
};

export default model("Question", QuestionSchema);
