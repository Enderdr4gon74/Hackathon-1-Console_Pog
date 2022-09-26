export class Clip {
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.thumbnailURL = data.thumbnailURL;
    this.id = data.id;
    this.creatorName = data.creator.name;
    this.creatorPicture = data.creator.picture;
  }

  get ClipTemplate() {
    return /*html*/ `
   <div class="col-md-3">

 <div class="p-3  bg-light elevation-5  mx-4 my-2 ">
    <div class="text-end">
    <i class="btn-close" 
    onclick="app.clipsController.removeClip('${this.id}')"
    ></i>
    
    </div>
  <div class="p-2 bg-secondary d-flex justify-content-between">
  <img src="${this.creatorPicture}" alt=""
                width="20rem">
                <h6>${this.creatorName}</h6>
  </div>
            <div class="d-flex justify-content-center">
              <img src="${this.thumbnailURL}" alt=""
                class="img-fluid rounded mt-2 elevation-4"
                data-bs-toggle="modal" data-bs-target="#Video"  onclick="app.activesController.setActiveClip('${this.id}')">
            </div>
            <div class="card-body ">
              <div  class="mt-2">
                <h5>${this.name}</h5>
              </div>
              <div>
                <small>${this.description}</small>
              </div>
            </div>
          </div>
</div>
    `;
  }
}

//onclick="app.activesController.setActiveClip('${this.id}')"

//  <div class="col-3 mb-4 p-0 d-flex flex-column align-items-center">
//         <img src="${this.thumbnailURL}" alt="video" class="thumbnail selectable" data-bs-toggle="modal" data-bs-target="#Video"  onclick="app.activesController.setActiveClip('${this.id}')">
//         <h4>${this.title}</h4>
//       </div>
