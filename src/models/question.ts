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
  fields: [String],
  weight: Number,
  active: {
    type: Boolean
  },
  open: {
    type: Boolean
  }
});

QuestionSchema.set('toJSON', {
  transform: function (_, obj) {
      obj.id = obj._id;
      delete obj._id;
  }
}); 

QuestionSchema.methods.getShort = function() {
  return pick(this, ["_id", "id", "question", "database", "weight", "fields"]);
};

export default model("Question", QuestionSchema);
