import { appState } from "../AppState.js";
import { ActiveClip } from "../Models/ActiveClip.js";
import { Clip } from "../Models/Clip.js";
import { Comment } from "../Models/Comment.js";
import { server } from "./AxiosService.js";

class ClipsService {
  async setActiveClip(id) {
    const res = await server.get(`/api/clips/${id}`);
    const response = await server.get(`/api/clips/${id}/comments`);
    appState.activeComments = new Comment(response.data);
    appState.activeClip = new ActiveClip(res.data);
    console.log(appState.activeComments);
  }
  async getClips() {
    const res = await server.get("/api/clips");
    console.log(res.data);
    appState.clips = res.data.map((c) => new Clip(c));
  }
}
export const clipsService = new ClipsService();
