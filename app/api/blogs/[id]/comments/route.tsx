import Comments from '@/models/comments';
import { NextRequest, NextResponse } from 'next/server';
import { script } from '@/script';

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  console.log('params', params);
  try {
    await script();
    const comments = await Comments.find({blog: params.id})
    return new NextResponse(JSON.stringify(comments));
  } catch (error) {
    return new NextResponse("Error in fetching MongoDB data: " + error);
  }
};