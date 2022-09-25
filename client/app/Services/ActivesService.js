import { appState } from "../AppState.js";
import { ActiveClip } from "../Models/ActiveClip.js";
import { Comment } from "../Models/Comment.js";
import { server } from "./AxiosService.js";

class ActivesService {
  async setActiveClip(id) {
    const res = await server.get(`/api/clips/${id}`);
    console.log("active clip", res.data);
    appState.activeClip = new ActiveClip(res.data);
    // console.log(appState.activeComments);
  }

  async setActiveComment(id) {
    const response = await server.get(`/api/clips/${id}/comments`);
    console.log(response.data, "active comments ");
    appState.activeComments = response.data.map((c) => new Comment(c));
    console.log("appState comments", appState.activeComments);
  }
}
export const activesService = new ActivesService();
