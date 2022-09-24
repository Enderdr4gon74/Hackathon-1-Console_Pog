import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const ClipSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 30 },
    description: { type: String, default: "", maxlength: 200 },
    url: { type: String, required: true },
    thumbnailURL: {
      type: String,
      default:
        "https://th.bing.com/th/id/OIP.dZjLz42vJR4eQXuBA4kDigHaEK?pid=ImgDet&rs=1",
    },
    views: { type: Number, default: 0 },
    likes: {type: Number, default: 0},
    dislikes: {types: Number, default: 0},
    

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
ClipSchema.virtual("like", {
  localField: "_id",
  foreignField: "clipId",
  count: true,
  ref: "like",
});
ClipSchema.virtual("dislike", {
  localField: "_id",
  foreignField: "clipId",
  count: true,
  ref: "dislike",
});

// TODO add this to dbContext
