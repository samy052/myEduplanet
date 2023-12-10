
// models/blogs.ts

import mongoose, { Document } from 'mongoose';

export interface Blog extends Document {
  title: string;
  content: string;
  imageUrl: string;
}

const blogSchema = new mongoose.Schema({
  title: { type: String},
  content: { type: String},
  imageUrl: { type: String},
});

const BlogModel = mongoose.model<Blog>('Blog', blogSchema);

export default BlogModel;