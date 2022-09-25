import { appState } from "../AppState.js"
import { Video } from "../Models/Video.js"
import { videosService } from "../Services/VideosService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


export class VideosController {
  constructor() {

  }

//  ANCHOR THIS IS NOT IN USE I BELIEVE

  async getVideo(videoId) {
    try {
      const video = await videosService.getVideo(videoId)
      appState.video = new Video(video)
    } catch (error) {
      console.error("[Get Video]", error)
      Pop.error(error)
    }
  }
}