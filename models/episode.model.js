import mongoose from "mongoose";
const { Schema, model } = mongoose;
const { ObjectId } = mongoose.Types;

const EPSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    project: { type: ObjectId, ref: "Project", required: true },
  },
  { timestamps: true }
);

export const EPProject = model("EPProject", EPSchema);
