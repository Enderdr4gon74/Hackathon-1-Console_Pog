import { appState } from "../AppState.js";
import { activesService } from "../Services/ActivesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawActiveClip() {
  let template = appState.activeClip.activeClipTemplate;
  setHTML("main-clip", template);
}

export class ActivesController {
  constructor() {
    appState.on("activeClip", _drawActiveClip);
  }

  async setActiveClip(id) {
    try {
      await activesService.setActiveComment(id);
      await activesService.setActiveClip(id);
    } catch (error) {
      console.error("[setActiveClip]", error);
      Pop.error(error);
    }
  }
}
