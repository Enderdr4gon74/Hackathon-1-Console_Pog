import { AuthController } from './Controllers/AuthController.js';
import { ValuesController } from './Controllers/ValuesController.js';
import { VideosController } from './Controllers/VideosController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  videosController = new VideosController();
}

// @ts-ignore
window.app = new App()
