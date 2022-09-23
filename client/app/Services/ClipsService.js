import { appState } from "../AppState.js"
import { Clip } from "../Models/Clip.js"
import { server } from "./AxiosService.js"

class ClipsService{
  async getClips() {
    const res = await server.get('/api/clips')
    console.log(res.data)
    appState.clips = res.data.map(c => new Clip(c))
  }
}
export const clipsService = new ClipsService()