export class Clip {
  constructor(data) {
    this.title = data.name;
    this.url = data.url;
    this.thumbnailURL = data.thumbnailURL;
    this.id = data.id;
  }

  get ClipTemplate() {
    return /*html*/ `
    <div class="col-3 mb-4 p-0 d-flex flex-column align-items-center">
        <img src="${this.thumbnailURL}" alt="video" class="thumbnail selectable" onclick="app.clipsController.setActiveClip('${this.id}')" data-bs-toggle="modal" data-bs-target="#Video">
        <h4>${this.title}</h4>
      </div>
    `;
  }
}
