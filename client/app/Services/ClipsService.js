import { appState } from "../AppState.js";
import { Clip } from "../Models/Clip.js";
import { server } from "./AxiosService.js";

class ClipsService {
  async removeClip(id) {
    const res = await server.delete(`/api/clips/${id}`);
    appState.clips = appState.clips.filter((c) => c.id !== id);
  }
  async createClip(formData) {
    const res = await server.post("/api/clips", formData);
    appState.clips = [...appState.clips, new Clip(res.data)];
  }
  async getClips() {
    const res = await server.get("/api/clips");
    appState.clips = res.data.map((c) => new Clip(c));
  }
}
export const clipsService = new ClipsService();
