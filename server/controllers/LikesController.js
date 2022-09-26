import { Auth0Provider } from "@bcwdev/auth0provider";
import { clipsService } from "../services/ClipsService.js";
import { dislikesService } from "../services/DislikesService.js";
import BaseController from "../utils/BaseController.js";

export class LikesController extends BaseController {
  constructor() {
    super('api/dislikes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/:clipId', this.createLike)
      .get('/:clipId', this.getLike)
      .post('/:clipId', this.createDislike)
      .get('/:clipId', this.getDislikes)
  }
  async getLike(res, req, next) {
    throw new Error("Method not implemented.");
  }
  async createLike(res, req, next) {
    throw new Error("Method not implemented.");
  }
  async getDislikes(res, req, next) {
    try {
      if (!req.params.clipId) {
        // TODO finish
      }
    } catch (error) {
      next(error)
    }
  }
  async createDislike(req, res, next) {
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