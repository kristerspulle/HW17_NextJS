import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export interface IUser extends Document {
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

export default UserModel;
