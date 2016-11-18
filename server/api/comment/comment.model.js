'use strict';

import mongoose from 'mongoose';

var CommentSchema = new mongoose.Schema({
  content: String,
  author: String
});

export default mongoose.model('Comment', CommentSchema);
