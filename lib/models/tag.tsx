import mongoose from 'mongoose';
const { Schema } = mongoose;

const tagsSchema = new Schema({ tag: String });

const Tag = mongoose.models.Tag || mongoose.model('Tag', tagsSchema);

export default Tag;
