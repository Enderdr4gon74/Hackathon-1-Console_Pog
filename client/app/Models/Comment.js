import { appState } from "../AppState.js";

export class Comment {
  constructor(data) {
    this.comment = data.comment;
    this.commentCreatorId = data.commentCreatorId;
    this.name = data.creator.name;
    this.picture = data.creator.picture;
    this.id = data.id;
    this.clipId = data.clipId;
  }
  get CommentsTemplate() {
    return `
    <div class="col-12 d-flex justify-content-between p-2 border rounded border-2 elevation 3 ">
    <i class="btn-close" onclick="app.commentsController.removeComment('${this.id}', '${this.clipId}')"></i>
    <small>${this.comment}</small>
    
    
              <img title="${this.name}" src="${this.picture}" alt="" class="img-fluid userImage rounded-circle ms-2 " style="width:2rem;height:2rem;">
            </div>
    `;
  }
}
