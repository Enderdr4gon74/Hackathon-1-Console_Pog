import { appState } from "../AppState.js";
import { ActiveClip } from "../Models/ActiveClip.js";
import { Comment } from "../Models/Comment.js";
import { server } from "./AxiosService.js";

class ActivesService {
  async setActiveClip(id) {
    const res = await server.get(`/api/clips/${id}`);
    appState.activeClip = new ActiveClip(res.data);
  }

  async setActiveComment(id) {
    const response = await server.get(`/api/clips/${id}/comments`);
    console.log(response.data, 'comments');
    appState.activeComments = response.data.map((c) => new Comment(c));
  }
}
export const activesService = new ActivesService();
