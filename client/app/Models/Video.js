export class Video{
  constructor(data){
this.title = data.title
this.vidURL = data.vidURL
this.likes = data.likes
this.dislikes = data.dislikes
  }


  get modalTemplate(){
    return  `
    'howdy boomer'
    `
  }
}