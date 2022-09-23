import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { ClipSchema } from "../models/Clip.js";
import { ValueSchema } from "../models/Value";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  Clips = mongoose.model("Clip", ClipSchema);
}

export const dbContext = new DbContext();
