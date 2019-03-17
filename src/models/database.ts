import { Schema, model } from "mongoose";

let DatabaseSchema = new Schema({
  name: String,
  title: {
    type: String,
    unique: true
  },
  description: {
    type: String
  },
  tables: [
    {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      props: [
        {
          isKey: {
            type: Boolean,
            default: false
          },
          name: String,
          value: String,
          relation: {
            table: String,
            type: {
              type: String,
              enum: ["ONE_TO_MANY", "ONE_TO_ONE"]
            }
          }
        }
      ]
    }
  ],
  active: {
    type: Boolean,
    default: false
  },
  open: {
    type: Boolean,
    default: false
  }
});

DatabaseSchema.set('toJSON', {
  transform: function (_, obj) {
      obj.id = obj._id;
      delete obj._id;
  }
}); 

export default model("Database", DatabaseSchema);
