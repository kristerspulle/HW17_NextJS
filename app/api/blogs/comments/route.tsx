import Comments from '@/lib/models/comments';
import { connectToDB } from '@/lib/mongo/connectToDB';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectToDB();
    const comments = await Comments.find().populate('blog', 'title')
    return new NextResponse(JSON.stringify(comments));
  } catch (error) {
    return new NextResponse('error' + error);
  }
}
