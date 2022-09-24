export class Comment {
  constructor(data) {
    this.comment = data.comment;
    this.commentCreatorId = data.commentCreatorId;
    this.name = data.creator.name;
    this.picture = data.creator.picture;
  }
  get CommentsTemplate() {
    return `
    <div class="col-12 d-flex justify-content-between">
              <p>${this.comment}</p>
              <img title="${this.name}" src="${this.picture}" alt="" class="img-fluid userImage rounded-circle ms-2">
            </div>
    `;
  }
}
