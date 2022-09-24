import { appState } from "../AppState.js";
import { ActiveClip } from "../Models/ActiveClip.js";
import { Clip } from "../Models/Clip.js";
import { Comment } from "../Models/Comment.js";
import { server } from "./AxiosService.js";

class ClipsService {
  resetActiveClip() {
    appState.activeClip = null;
  }
  // getAllComments() {
  //   throw new Error("Method not implemented.");
  // }
  async createComment(formData) {
    formData.name = appState.account;
    let comment = new Comment(formData);
    let id = formData.clipId;
    const res = await server.post(`/api/clips/${id}/comments`, comment);
    appState.activeComments = [comment, ...appState.activeComments];
  }
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
    console.log("appstate comments", appState.activeComments);
  }

  async getClips() {
    const res = await server.get("/api/clips");
    console.log(res.data);
    appState.clips = res.data.map((c) => new Clip(c));
  }
}
export const clipsService = new ClipsService();
