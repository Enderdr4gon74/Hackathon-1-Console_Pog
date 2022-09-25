import { appState } from "../AppState.js";

export class ActiveClip {
  constructor(data) {
    this.name = data.name;
    this.url = data.url;
    this.id = data.id;
    this.likes = data.likes;
    this.dislikes = data.dislikes || "0";
    this.views = data.views;
    this.description = data.description;
    this.comment = data.comment;
  }

  get activeClipTemplate() {
    return /*html */ `

        <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                    <div class="">
                      <h5><b>${this.name}</b></h5>
                    </div>
                  </div>
                  <div class="col-md-6">
                  <iframe width="651" height="535" src="${this.url} " allowfullscreen class="rounded elevation-4 "></iframe>
                  <div class="col-12 d-flex justify-content-between">
          <div class="d-flex">
            <button onclick="" class="btn btn-outline-dark me-4"><i class="mdi mdi-thumb-up"></i>${this.likes}</button>
            <button onclick="" class="btn btn-outline-dark mx-4"><i class="mdi mdi-thumb-down"></i>${this.dislikes}</button>
            <h4>${this.views}  Views</h4>
          </div>
        </div>
                  </div>
                  <div class="col-md-6" >
                  <div class="scrollMe border-solid" id="commentsTemplate" >${this.Comments}</div>
                  <div id="form-div" class="mt-5">
                    <form class="d-flex justify-content-between align-items-center" onsubmit="app.commentsController.createComment('${this.id}')">
              <div class="form-floating">
                <input type="text" class="form-control" name="comment" id="comment" placeholder="Comment">
                <label for="comment">Comment</label>
                </div>
                <button type="submit" class="btn btn-info comment ms-2">Comment</button>
            </form>
            </div>
                  
                </div>
              </div>
    
    `;
  }

  get Comments() {
    let comments = appState.activeComments;
    let template = "";
    comments.forEach((c) => (template += c.CommentsTemplate));
    return template;
  }
}
