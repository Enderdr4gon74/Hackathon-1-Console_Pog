import { appState } from "../AppState.js";
import { Comment } from "../Models/Comment.js";
import { server } from "./AxiosService.js";

class CommentsService {
  async createComment(formData) {
    let id = formData.clipId;
    const comment = formData;
    const res = await server.post(`/api/clips/${id}/comments`, comment);
    appState.activeComments = [
      ...appState.activeComments,
      new Comment(res.data),
    ];
    appState.emit('newComment')
  }
}
export const commentsService = new CommentsService();
