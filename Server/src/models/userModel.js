import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },

    google_id:{
      type : String,
    }
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;