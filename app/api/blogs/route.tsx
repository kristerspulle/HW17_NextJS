import { connectToDB } from '@/lib/mongo/connectToDB';
import Blog from '@/lib/models/blog';
import { NextResponse } from 'next/server';
import { Tag } from '@/lib/models/tag';

export const GET = async () => {
  
  try {
    await connectToDB();
    const tag = await Tag.create({tag: 'Edu'})
    const blogs = await Blog.find().populate('tag', 'tag')
    return new NextResponse(JSON.stringify(blogs));
  } catch (error) {
    return new NextResponse('err' + error);
  }
};
