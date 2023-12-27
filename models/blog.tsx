import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema({
  title: String,
  image: String,
  paragraph: String,
  tag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tags'
  }
})

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;