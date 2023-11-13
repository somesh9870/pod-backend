import mongoose from "mongoose";
const { Schema, model } = mongoose;
const { ObjectId } = mongoose.Types;
const ProjectSchema = new Schema(
  {
    projectName: {
      type: String,
    },
    user: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Project = model("Project", ProjectSchema);
