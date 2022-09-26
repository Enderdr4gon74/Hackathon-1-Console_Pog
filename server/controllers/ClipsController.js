import { Auth0Provider } from "@bcwdev/auth0provider";
import { clipsService } from "../services/ClipsService.js";
import BaseController from "../utils/BaseController.js";

export class ClipsController extends BaseController {
  constructor() {
    super("/api/clips");
    this.router
      .get("", this.getClips)
      .get("/:clipId", this.getClipById)
      .get("/:clipId/comments", this.getClipComments)
      .get("/:clipId/comments/:commentCreatorId", this.getCommentById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("/:clipId/comments", this.createClipComment)
      .post("", this.createClip)
      .delete("/:clipId", this.removeClip)
      // .delete("/:clipId/comments/:id", this.removeComment);
    // .put('/:clipId/like',this.toggleLike)
  }
   async getCommentById(req, res, next){
    try{
      const comment = await clipsService.getCommentsById(req.params.clipId, req.params.commentCreatorId)
   res.send(comment)
    }
    catch (error) {
    next(error)
    }
    }
  // async removeComment(req, res, next) {
  //   try {
  //     await clipsService.removeComment(
  //       req.params.clipId,
  //       req.params.id,
  //       req.userInfo
  //     );
  //     res.send("removed this comment");
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  async removeClip(req, res, next) {
    try {
      await clipsService.removeClip(req.params.clipId, req.userInfo);
      res.send("Removed this Clip!");
    } catch (error) {
      next(error);
    }
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

  async createClipComment(req, res, next) {
    try {
      const formData = req.body;
      const clipComment = await clipsService.createClipComment(
        req.params.clipId,
        formData,
        req.userInfo
      );
      res.send(clipComment);
    } catch (error) {
      next(error);
    }
  }

  async getClipComments(req, res, next) {
    try {
      const clipComments = await clipsService.getCommentsByClipId(
        req.params.clipId
      );
      res.send(clipComments);
    } catch (error) {
      next(error);
    }
  }

  async getClipById(req, res, next) {
    try {
      const clip = await clipsService.getClipById(req.params.clipId);
      res.send(clip);
    } catch (error) {
      next(error);
    }
  }
  async getClips(req, res, next) {
    try {
      const clips = await clipsService.getClips();
      res.send(clips);
    } catch (error) {
      next(error);
    }
  }
}
