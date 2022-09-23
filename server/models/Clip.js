import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const ClipSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    url: { type: String, required: true },
    // STUB be to sure add whats appropriate
    creatorId: { type: ObjectId, ref: "Account", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

ClipSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});

// TODO add this to dbContext
