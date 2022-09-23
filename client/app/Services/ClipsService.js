import { appState } from "../AppState.js"
import { Clip } from "../Models/Clip.js"
import { server } from "./AxiosService.js"

class ClipsService{
  async getClips() {
    const res = await server.get('/api/clips')
    console.log(res.data)
    appState.clips = res.data.map(t => new Clip(t))
  }
}
export const clipsService = new ClipsService()