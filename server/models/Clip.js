import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const ClipSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 30 },
    description: { type: String, default: "", maxlength: 200 },
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
})
ClipSchema.virtual("viewer", {
  localField: "_id",
  foreignField: "clipId",
  count: true,
  ref: "Viewer"
})
  ;

// TODO add this to dbContext

