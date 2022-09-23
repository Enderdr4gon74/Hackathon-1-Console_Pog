import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";

export class CommentsController extends BaseController {
  constructor() {
    super("/api/comments");
    this.router.post("", this.createComments);
  }

  async createComments(req, res, next) {
    try {
      const comment = await commentsService.createComments(req.body);
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }
}
