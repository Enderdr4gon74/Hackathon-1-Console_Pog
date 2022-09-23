import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { ClipSchema } from "../models/Clip.js";
import { ValueSchema } from "../models/Value";
import { ViewerSchema } from "../models/Viewer.js";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  Clips = mongoose.model("Clip", ClipSchema);
  Viewers = mongoose.model("Viewer", ViewerSchema);
}

export const dbContext = new DbContext();
