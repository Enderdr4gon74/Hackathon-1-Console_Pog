import { Auth0Provider } from "@bcwdev/auth0provider";
import { clipsService } from "../services/ClipsService.js";
import BaseController from "../utils/BaseController.js";

export class ClipsController extends BaseController {
  constructor() {
    super("/api/clips");
    this.router
      .get("", this.getClips)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createClip);
  }
  async createClip(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      const clip = await clipsService.createClip(req.body);
      res.send(clip);
    } catch (error) {
      next(error);
    }
  }

  // async getClipById(req, res, next) {
  //   try {
  //     const clip = await clipsService.getClipById(req.params.clipId);
  //     res.send(clip);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  async getClips(req, res, next) {
    try {
      const clips = await clipsService.getClips();
      res.send(clips);
    } catch (error) {
      next(error);
    }
  }
}
