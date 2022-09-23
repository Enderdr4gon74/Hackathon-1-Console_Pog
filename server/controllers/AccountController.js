import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountService } from "../services/AccountService";
import { clipsService } from "../services/ClipsService.js";
import BaseController from "../utils/BaseController";

export class AccountController extends BaseController {
  constructor() {
    super("account");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserAccount)
      .get("/viewers", this.getViewers)
      .post("/viewer", this.createViewer);
  }

  async createViewer(req, res, next) {
    try {
      req.body.viewerId = req.userInfo.id;
      const viewer = await clipsService.createViewer(req.body);
      res.send(viewer);
    } catch (error) {
      next(error);
    }
  }

  // ANCHOR get viewers and create viewers
  async getViewers(req, res, next) {
    try {
      const viewers = await clipsService.getViewers({
        viewerId: req.userInfo.id,
      });
      res.send(viewers);
    } catch (error) {
      next(error);
    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo);
      res.send(account);
    } catch (error) {
      next(error);
    }
  }
}
