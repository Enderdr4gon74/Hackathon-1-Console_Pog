import { AuthController } from './Controllers/AuthController.js';
import { ClipsController } from './Controllers/ClipsController.js';
import { ValuesController } from './Controllers/ValuesController.js';
import { VideosController } from './Controllers/VideosController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  videosController = new VideosController();
  clipsController = new ClipsController();
}

// @ts-ignore
window.app = new App()
