import { appState } from "../AppState.js";
import { activesService } from "../Services/ActivesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawActiveClip() {
  let template = "";
  template += appState.activeClip.activeClipTemplate;
  setHTML("main-clip", template);
}
function _drawActiveComments() {
  let template = "";
  appState.activeComments.forEach((c) => (template += c.CommentsTemplate));
  setHTML("commentsTemplate", template);
}

export class ActivesController {
  constructor() {
    // appState.on("activeClip", _drawActiveClip);
    appState.on("activeComments", _drawActiveComments);
  }
  async setActiveClip(id) {
    try {
      // appState.activeClip = null;
      await activesService.setActiveClip(id);
      _drawActiveClip();
      await activesService.setActiveComment(id);
    } catch (error) {
      console.error("[setActiveClip]", error);
      Pop.error(error);
    }
  }
}
