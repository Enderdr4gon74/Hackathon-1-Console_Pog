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
function _drawActiveClip() {
  // @ts-ignore
  let template = appState.activeClip.activeClipTemplate;
  setHTML("main-clip", template);
}
function _drawActiveComments() {
  let template = "";
  appState.activeComments.forEach((c) => (template += c.CommentsTemplate));
  setHTML("commentsTemplate", template);
}

export class ClipsController {
  constructor() {
    this.getClips();
    appState.on("clips", _drawClips);
    appState.on("activeComments", _drawActiveClip);
    // appState.on("activeComments", _drawActiveComments);
  }
  async getClips() {
    try {
      await clipsService.getClips();
    } catch (error) {
      console.error("[Get Video]", error);
      Pop.error(error);
    }
  }
  async setActiveClip(id) {
    try {
      // appState.activeClip = null;
      await clipsService.setActiveClip(id);
      await clipsService.setActiveComment(id);

      // if (appState.activeClip != null) {
      //   appState.activeClip = null;
      //   return;
      // }
    } catch (error) {
      console.error("[setActiveClip]", error);
      Pop.error(error);
    }
  }

  async resetActiveClip() {
    try {
      await clipsService.resetActiveClip();
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }

  // async getAllComments() {
  //   try {
  //     await clipsService.getAllComments();
  //   } catch (error) {
  //     console.error("[]", error);
  //     Pop.error(error);
  //   }
  // }

  async createComment(clipId) {
    try {
      window.event.preventDefault();
      let form = window.event.target;
      let formData = getFormData(form);
      formData.clipId = appState.activeClip.id;
      formData.name = appState.account.name;
      clipsService.createComment(formData);
    } catch (error) {
      console.error("[CREATE COMMENT]", error);
      Pop.error(error);
    }
  }
}
