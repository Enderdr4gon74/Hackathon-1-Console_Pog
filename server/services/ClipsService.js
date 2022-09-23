import { dbContext } from "../db/DbContext.js";

class ClipsService {
  async createClip(formData) {
    const clip = await dbContext.Clips.create(formData);
    await clip.populate("creator", "name picture");
    return clip;
  }
  // async getClipById(clipId) {
  //   const clip = await dbContext.Clips.find({clipId}).populate('clip','name url')

  //   return clip
  // }
  async getClips() {
    const clips = await dbContext.Clips.find();
    return clips;
  }
  //
}
export const clipsService = new ClipsService();
