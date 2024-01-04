import { connectToDB } from '@/lib/mongo/connectToDB';
import Blog from '@/lib/models/blog';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest, { params }: { params: { tagid: string } }) => {
  console.log('params:', params);
  try {
    await connectToDB();
    const blog = await Blog.find({tag: params.tagid}).populate('tag', 'tag');
    return new NextResponse(JSON.stringify(blog));
  } catch (error) {
    return new NextResponse('Error in fetching MongoDB data: ' + error);
  }
};