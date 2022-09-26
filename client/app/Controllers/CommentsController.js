import { appState } from "../AppState.js";
import { commentsService } from "../Services/commentsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawNewComments() {
  let template = "";
  appState.activeComments.forEach((c) => (template += c.CommentsTemplate));
  setHTML("commentsTemplate", template);
}
export class CommentsController {
  constructor() {
    appState.on("newComment", _drawNewComments);
  }

  // NOTE removeComment doesn't work yet
  async removeComment(key) {
    try {
      const yes = await Pop.confirm();
      if (!yes) {
        return;
      }
      await commentsService.removeComment(key);
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }
  async createComment(clipId) {
    try {
      window.event.preventDefault();
      let form = window.event.target;
      let formData = getFormData(form);
      formData.clipId = appState.activeClip.id;
      formData.name = appState.account.name;
      await commentsService.createComment(formData);

      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error("[CREATE COMMENT]", error);
      Pop.error(error);
    }
  }
}
