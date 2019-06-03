import { Schema, model } from "mongoose";
import { pick } from "lodash";

const TestSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  available_time: {
    type: Date
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question"
    }
  ],
  active: {
    type: Boolean,
    default: false
  },
  open: {
    type: Boolean,
    default: false
  },
  date_changed: {
    type: Date
  }
});

TestSchema.set('toJSON', {
  transform: function (_, obj) {
      obj.id = obj._id;
      delete obj._id;
  }
}); 

TestSchema.pre('save', function(next) {
  this.date_changed = new Date();
  next();
});

TestSchema.methods.getMeta = function() {
  return pick(this, ["id", "title", "date_changed"]);
};

export default model("Test", TestSchema);
