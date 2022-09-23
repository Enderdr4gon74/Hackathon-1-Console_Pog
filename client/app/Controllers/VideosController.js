import { appState } from "../AppState.js"
import { Video } from "../Models/Video.js"
import { videosService } from "../Services/VideosService.js"
import { Pop } from "../Utils/Pop.js"

export class VideosController {
  constructor() {
    this.getThumbnails()
  }

  async getThumbnails() {
    try {
      const Thumbnails = await videosService.getThumbnails()
    } catch (error) {
      console.error("[Get Video]", error)
      Pop.error(error)
    }
  }

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