import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    status: {
      type: String,
      required: true,
      enums: ["active", "inactive", "disabled"],
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
    },
  },
  { timestamps: true }
);

export const Item = mongoose.model("item", itemSchema);
