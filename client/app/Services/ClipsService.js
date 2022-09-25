import { appState } from "../AppState.js";
import { ActiveClip } from "../Models/ActiveClip.js";
import { Clip } from "../Models/Clip.js";
import { Comment } from "../Models/Comment.js";
import { server } from "./AxiosService.js";

class ClipsService {
  async createComment(formData) {
    let id = formData.clipId;
    const comment = formData;
    const res = await server.post(`/api/clips/${id}/comments`, comment);
    appState.activeComments = [
      ...appState.activeComments,
      new Comment(res.data),
    ];
    appState.newComment++;
    
    // appState.emit("activeComments");
  }
  async getClips() {
    const res = await server.get("/api/clips");
    console.log(res.data, "get clips");
    appState.clips = res.data.map((c) => new Clip(c));
  }
}
export const clipsService = new ClipsService();
