import { dev } from "./env.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  user = {};
  /** @type {import('./Models/Account.js').Account} */
  // @ts-ignore
  account = {};
  /** @type {import('./Models/Value').Value[]} */
  values = [];

  /** @type {import('./Models/Video.js').Video | null} */
  video = null;

  /** @type {import('./Models/Clip.js').Clip[]} */
  clips = [];

  /** @type {import('./Models/ActiveClip.js').ActiveClip | null} */
  activeClip = null;
  /** @type {import('./Models/Comment').Comment| null} */
  activeComments = null;

  socketData = [];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});

if (dev) {
  // @ts-ignore
  window.appState = appState;
}
