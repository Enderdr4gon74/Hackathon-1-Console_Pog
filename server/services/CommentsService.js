import { dbContext } from "../db/DbContext.js";

class CommentsService {
  async createComments(body) {
    const comment = await dbContext.Comments.create(FormData);
    await comment.populate("creator", "name picture");
    return comment;
  }
  //
}
export const commentsService = new CommentsService();
