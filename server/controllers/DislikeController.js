import { Auth0Provider } from "@bcwdev/auth0provider";
import { clipsService } from "../services/ClipsService.js";
import { dislikesService } from "../services/DislikesService.js";
import BaseController from "../utils/BaseController.js";

export class DislikeController extends BaseController{
  constructor(){
    super('api/dislikes')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('/:clipId',this.createDislike)
    .get('/:clipId',this.getDislikes)
  }
  async getDislikes(res,req,next) {
try {
  if(!req.params.clipId){
    // TODO finish
  }
} catch (error) {
  next(error)
}
  }
  async createDislike(req,res,next) {
    try {
      const formData = {
        clipId: req.body.clipId,
        dislikeId: req.userInfo.id
      }
      const dislike = await clipsService.createDislike(formData)
    } catch (error) {
      next(error)
    }
  }
}