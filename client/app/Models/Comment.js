import { appState } from "../AppState.js";

export class Comment {
  constructor(data) {
    this.comment = data.comment;
    this.commentCreatorId = data.commentCreatorId;
    this.name = data.creator.name 
    this.picture = data.creator.picture;
  }
  get CommentsTemplate() {
    return `
    <div class="col-12 d-flex justify-content-between p-2 border rounded border-2 elevation 3 ">
    
    <small>${this.comment}</small>
    
    
              <img title="${this.name}" src="${this.picture}" alt="" class="img-fluid userImage rounded-circle ms-2 " style="width:2rem;height:2rem;">
            </div>
    `;
  }
}
