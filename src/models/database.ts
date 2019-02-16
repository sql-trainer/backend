import { Schema, model } from "mongoose";

let DatabaseSchema = new Schema({
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
          key: String,
          value: String
        }
      ]
    }
  ],
  active: {
    type: Boolean,
    default: false
  }
});

export default model("Database", DatabaseSchema);
