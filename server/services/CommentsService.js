import { dbContext } from "../db/DbContext.js";

class CommentsService {
  async createComments(body) {
    const comment = await dbContext.Comments.create(FormData);
    return comment;
  }
  //
}
export const commentsService = new CommentsService();
