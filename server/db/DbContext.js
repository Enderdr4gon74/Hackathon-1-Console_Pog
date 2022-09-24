import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { ClipSchema } from "../models/Clip.js";
import { CommentSchema } from "../models/Comment.js";
import { DislikeSchema } from "../models/Dislike.js";
import { ValueSchema } from "../models/Value";
import { ViewerSchema } from "../models/Viewer.js";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  Clips = mongoose.model("Clip", ClipSchema);
  likes = mongoose.model("like", ViewerSchema);
  dislikes = mongoose.model("dislike", DislikeSchema);
  Comments = mongoose.model("Comment", CommentSchema);
}

export const dbContext = new DbContext();
