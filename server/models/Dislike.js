import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const DislikeSchema = new Schema({
  dislikeId: { type: ObjectId, required: true, ref: "Account" },
  clipId: { type: ObjectId, required: true, ref: 'Clip' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)
DislikeSchema.virtual('dislike', {
  localField: 'dislikeId',
  foreignField: '_id',
  justOne: true,
  ref: "Account"
})
DislikeSchema.virtual('clip', {
  localField: 'clipId',
  foreignField: '_id',
  justOne: true,
  ref: "Clip"
})
DislikeSchema.index({ dislikeId: 1, clipId: 1 }, { unique: true })