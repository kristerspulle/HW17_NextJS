import { connectToDB } from '@/lib/mongo/connectToDB';
import Blog from '@/lib/models/blog';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectToDB();
    const blog = await Blog.findById(params.id).populate('tag', 'tag');
    return new NextResponse(JSON.stringify(blog));
  } catch (error) {
    return new NextResponse('Error in fetching MongoDB data: ' + error);
  }
};

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectToDB();
    const deleteBlog = await Blog.findByIdAndDelete(params.id);
    return new NextResponse(JSON.stringify(deleteBlog));
  } catch (error) {
    return new NextResponse('error' + error);
  }
};

export const PATCH = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectToDB();
    const body = await request.json()
    const editBlog = await Blog.findByIdAndUpdate(params.id, body);
    return new NextResponse(JSON.stringify(editBlog));
  } catch (error) {
    return new NextResponse('error' + error);
  }
}
