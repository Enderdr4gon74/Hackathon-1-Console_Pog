import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const LikeSchema = new Schema({
  likeId: { type: ObjectId, required: true, ref: "Account" },
  clipId: { type: ObjectId, required: true, ref: 'Clip' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)
LikeSchema.virtual('like', {
  localField: 'likeId',
  foreignField: '_id',
  justOne: true,
  ref: "Account"
})
LikeSchema.virtual('clip', {
  localField: 'clipId',
  foreignField: '_id',
  justOne: true,
  ref: "Clip"
})
LikeSchema.index({ likeId: 1, clipId: 1 }, { unique: true })