import { appState } from "../AppState.js"
import { clipsService } from "../Services/ClipsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawClips(){
  let template = ""
  appState.clips.forEach(c=> template += c.ClipTemplate)
  setHTML('clips',template)
}
function _drawVideo(){
  setHTML('videos', )
}
export class ClipsController{
  
  constructor(){
    this.getClips()
    appState.on('clips',_drawClips)
    appState.on('clips',_drawVideo)
  }
  async getClips() {
    try {
      const Clips = await clipsService.getClips()
    } catch (error) {
      console.error("[Get Video]", error)
      Pop.error(error)
    }
  }
}