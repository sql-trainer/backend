import { Schema, model } from "mongoose";

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  db: {
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

export default model("Question", QuestionSchema);
