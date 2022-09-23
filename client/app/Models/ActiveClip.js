

export class ActiveClip{
  constructor(data){
    this.name = data.name
  }

  get activeClipTemplate(){
    return`
    <div class="col-8 d-flex flex-column justify-content-between">
      <section class="row">
        <div class="col-12">
          <iframe width="100%" height="450" src="${this.}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <video width="320" height="240" controls>
            <source src="../client/assets/img/production ID_4247319.mp4" type="video/mp4">
          </video> -->
        </div>
      </section>
      <section class="row mb-2">
        <div class="col-12 d-flex justify-content-between">
          <div class="d-flex">
            <button onclick="" class="btn btn-outline-dark me-4"><i class="mdi mdi-thumb-up"></i> 0</button>
            <button onclick="" class="btn btn-outline-dark"><i class="mdi mdi-thumb-down"></i> 0</button>
          </div>
          <h4>0 Views</h4>
        </div>
      </section>
    </div>
    <div class="col-4" id="comments">
    <div class="row d-flex flex-column justify-content-start align-items-stretch comment">
    <div class="col-12 comment">
      <div class="row flex-column justify-content-between comment">
        <div class="col-12 comment-row overflow-auto">
          <div class="row gap-2">
            ${this.commentsTemplate}
           </div>
          </div>
        </div>
        <div class="col-12 p-0 mt-2">
          <form class="d-flex justify-content-between align-items-center">
            <div class="form-floating">
              <input type="text" class="form-control" name="comment" id="comment" placeholder="Comment">
              <label for="comment">Comment</label>
            </div>
            <button type="submit" class="btn btn-info comment me-2">Comment</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    </div>
    `
  }
  get commentsTemplate(){
    return`
    <div class="col-12 d-flex">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos eaque delectus.</p>
              <img title="name" src="https://thiscatdoesnotexist.com/" alt="" class="img-fluid userImage rounded-circle ms-2">
            </div>
    `
  }
}