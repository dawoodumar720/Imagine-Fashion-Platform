import mongoose, { Schema } from "mongoose";

const imageSchema = new Schema(
  {
    imageFile: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Image = mongoose.model("Image", imageSchema);
