export class Comment {
  constructor(data) {
    this.comment = data.comment;
    this.commentCreatorId = data.commentCreatorId;
  }
  get CommentsTemplate() {
    return `
    <div class="col-12 d-flex justify-content-between">
              <p>${this.comment}</p>
              <img title="name" src="https://thiscatdoesnotexist.com/" alt="" class="img-fluid userImage rounded-circle ms-2">
            </div>
    `;
  }
}
