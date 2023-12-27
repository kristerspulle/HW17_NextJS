import mongoose, { Schema } from 'mongoose';

const tagsSchema = new Schema({
  tag: String
})

const Tags = mongoose.models.Comments || mongoose.model('Tags', tagsSchema);

export default Tags;



