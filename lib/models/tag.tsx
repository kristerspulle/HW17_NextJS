import mongoose from 'mongoose';

const { Schema } = mongoose;

const tagsSchema = new Schema({ tag: String });

export const Tag = mongoose.models.Tag || mongoose.model('Tag', tagsSchema);



