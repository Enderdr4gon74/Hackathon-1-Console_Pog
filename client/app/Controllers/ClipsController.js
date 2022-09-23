import { appState } from "../AppState.js";
import { clipsService } from "../Services/ClipsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawClips() {
  let template = "";
  appState.clips.forEach((c) => (template += c.ClipTemplate));
  setHTML("clips", template);
}
function _drawActiveClip() {
  // @ts-ignore
  let template = appState.activeClip.activeClipTemplate;
  setHTML("active-clip", template);
}
export class ClipsController {
  constructor() {
    this.getClips();
    appState.on("clips", _drawClips);
    appState.on("activeClip", _drawActiveClip);
  }
  async getClips() {
    try {
      const Clips = await clipsService.getClips();
    } catch (error) {
      console.error("[Get Video]", error);
      Pop.error(error);
    }
  }
  async setActiveClip(id) {
    try {
      await clipsService.setActiveClip(id);
    } catch (error) {
      console.error("[setActiveClip]", error);
      Pop.error(error);
    }
  }
}
