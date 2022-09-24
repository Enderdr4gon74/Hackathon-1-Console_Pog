import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class ClipsService {
  async removeComment(commentId,userInfo) {
    const comment = await dbContext.Comments.findById(commentId)
    if(!comment){throw new BadRequest('Invalid Id')}
    if(comment.commentCreatorId != userInfo.id){throw new Forbidden('HEY GO AWAY NOT URS')}
    comment.remove()
  //  const comment =  await dbContext.Comments.find({commentId})
  //  dbContext.Comments.remove(commentId)
  }
  async createClipComment(clipId, formData, userInfo) {
    formData.clipId = clipId
    formData.commentCreatorId = userInfo.id
    const clipComment = await dbContext.Comments.create(formData)
    return clipComment
  }
   async getCommentsByClipId(clipId) {
    const clipComments = await dbContext.Comments.find({clipId}).populate('creator', 'name picture')
    return clipComments
  }
  async createDislike(formData) {
    const clip = await this.getClipById(formData.clipId)
    const dislike = await dbContext.dislikes.create(formData)
    await dislike.populate('clip')
    await dislike.populate('dislike','name picture')
    return dislike
  }
async getDislikes(query = {}){
  const dislikes = await dbContext.dislikes.find(query)
  .populate('clip').populate('dislike','name picture')
}
  // async getViewers(query = {}) {
  //   const viewers = await dbContext.Viewers.find(query)
  //     .populate("clip")
  //     .populate("viewer", "name picture");
  //   return viewers;
  // }
  // async createViewer(formData) {
  //   const clip = await this.getClipById(formData.clipId);
  //   const viewer = await dbContext.Viewers.create(formData);
  //   await viewer.populate("clip");
  //   await viewer.populate("viewer", "name picture");
  //   return viewer;
  // }
  async removeClip(id, userInfo) {
    const clip = await this.getClipById(id);
    if (clip.creatorId != userInfo.id) {
      throw new Forbidden("HEY GO AWAY");
    }
    await clip.remove();
  }
  async createClip(formData) {
    const clip = await dbContext.Clips.create(formData);
    await clip.populate("creator", "name picture");
    return clip;
  }
  async getClipById(id) {
    // TODO populate for every user like or view
    const clip = await dbContext.Clips.findById(id).populate("creator","name picture").populate('like').populate('dislike')
    if (!clip) {
      throw new BadRequest("Invalid Id");
    }
    return clip;
  }
  async getClips() {
    const clips = await dbContext.Clips.find().populate(
      "creator",
      "name picture"
    );
    return clips;
  }
  //
}
export const clipsService = new ClipsService();
