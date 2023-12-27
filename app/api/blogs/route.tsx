import { script } from '@/script';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try{
    await script();
    const blogs = await Blog.find();
    return new NextResponse(JSON.stringify(blogs));
  }
  catch(error) {
    return new NextResponse('err' + error);
  }
}