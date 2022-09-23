import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const ViewerSchema = new Schema({
  viewerId: { type: ObjectId, required: true, ref: "Account" },
  ClipId: { type: ObjectId, required: true, ref: 'Clip' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)
ViewerSchema.virtual('viewer', {
  localField: 'viewerId',
  foreignField: '_id',
  justOne: true,
  ref: "Account"
})
ViewerSchema.virtual('clip', {
  localField: 'clipId',
  foreignField: '_id',
  justOne: true,
  ref: "Clip"
})
ViewerSchema.index({ viewerId: 1, clipId: 1 }, { unique: true })