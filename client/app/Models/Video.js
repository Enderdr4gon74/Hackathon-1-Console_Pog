export class Video{
  constructor(data){
  this.title = data.title
  this.vidURL = data.vidURL
  this.likes = data.likes
  this.dislikes = data.dislikes
  this.views = data.views
  }


  get modalTitleTemplate() {
    return /*html*/`
    <h5 class="modal-title" id="VideoLabel">${this.title}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `
  }

  get modalVideoTemplate(){
    return  /*html*/`
    <section class="row">
      <div class="col-12">
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/m2j6FXBrze4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <!-- <video width="320" height="240" controls>
          <source src="../client/assets/img/production ID_4247319.mp4" type="video/mp4">
        </video> -->
      </div>
    </section>
    <section class="row mb-2">
      <div class="col-12 d-flex justify-content-between">
        <div class="d-flex">
          <button onclick="" class="btn btn-outline-dark me-4"><i class="mdi mdi-thumb-up"></i> ${this.likes}</button>
          <button onclick="" class="btn btn-outline-dark"><i class="mdi mdi-thumb-down"></i> ${this.dislikes}</button>
        </div>
        <h4>${this.views} Views</h4>
      </div>
    </section>
    `
  }
}