import { appState } from "../AppState.js"
import { Clip } from "../Models/Clip.js"
import { server } from "./AxiosService.js"

class VideosService {
  async getThumbnails() {
    const res = await server.get('/api/clips')
    console.log(res.data)
    appState.thumbnails = res.data.map(t => new Clip(res.data))
  }
  async getVideo(videoId) {
    // const res = Server.get
  }

}

export const videosService = new VideosService()