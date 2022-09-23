import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const CommentSchema = new Schema(
  {
    title: { type: String, required: true },
    clipId: { type: ObjectId, ref: "Clip", required: true },
    commentCreatorId: { type: ObjectId, ref: "Account", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

CommentSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});
CommentSchema.virtual("clip", {
  localField: "clipId",
  foreignField: "_id",
  justOne: true,
  ref: "Clip",
});

// TODO add this to dbContext
