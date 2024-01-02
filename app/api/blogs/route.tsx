import { connectToDB } from '@/lib/mongo/connectToDB';
import Blog from '@/lib/models/blog';
import { NextResponse } from 'next/server';

export const GET = async () => {
  
  try {
    await connectToDB();
    const blogs = await Blog.find().populate('tag')
    return new NextResponse(JSON.stringify(blogs));
  } catch (error) {
    return new NextResponse('err' + error);
  }
};
