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

  async createClip(formData) {
    try {
      window.event.preventDefault();
      let form = window.event.target;
      let formData = getFormData(form);
      await clipsService.createClip(formData);
    } catch (error) {
      console.error("[createClip]", error);
      Pop.error(error);
    }
  }

  async removeClip(id) {
    try {
      if (await Pop.confirm("are you sure you want to delete this?")) {
        await clipsService.removeClip(id);
      }
      Pop.toast("deleted");
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }
}
