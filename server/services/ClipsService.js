import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class ClipsService {
  async removeClip(id, userInfo) {
    const clip = await this.getClipById(id)
    if (clip.creatorId != userInfo.id) {
      throw new Forbidden('HEY GO AWAY')
    }
    await clip.remove()
  }
  async createClip(formData) {
    const clip = await dbContext.Clips.create(formData);
    await clip.populate("creator", "name picture");
    return clip;
  }
  async getClipById(id) {
    // TODO populate for every user like or view
    const clip = await dbContext.Clips.findById(id).populate('creator', 'name picture')
    if (!clip) {
      throw new BadRequest('Invalid Id')
    }
    return clip
  }
  async getClips() {
    const clips = await dbContext.Clips.find().populate('creator', 'name picture');
    return clips;
  }
  //
}
export const clipsService = new ClipsService();