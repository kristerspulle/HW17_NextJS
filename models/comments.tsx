import mongoose, { Schema } from 'mongoose';

const commentsSchema = new Schema({
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  },
  name: String,
  comment: String,
})

const Comments = mongoose.models.Comments || mongoose.model('Comments', commentsSchema);

export default Comments;



