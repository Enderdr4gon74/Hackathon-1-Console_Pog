import { appState } from "../AppState.js";
import { clipsService } from "../Services/ClipsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawClips() {
  let template = "";
  appState.clips.forEach((c) => (template += c.ClipTemplate));
  setHTML("clips", template);
}

export class ClipsController {
  constructor() {
    this.getClips();
    appState.on("clips", _drawClips);
  }
  async getClips() {
    try {
      await clipsService.getClips();
    } catch (error) {
      console.error("[Get Video]", error);
      Pop.error(error);
    }
  }
}
