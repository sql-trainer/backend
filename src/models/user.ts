import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
        required: true
    }
});

export default model("User", UserSchema);
