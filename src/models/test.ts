import { Schema, model } from "mongoose";

const TestSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  answer: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  available_time: {
    type: Date
  },
  questions:[{
    type: Schema.Types.ObjectId,
    ref: "Question"
  }],
  active: {
    type: Boolean,
    default: false
  },
  open: {
    type: Boolean,
    default: false
  }
});

export default model("Test", TestSchema);
