import Comments from '@/lib/models/comments';
import { connectToDB } from '@/lib/mongo/connectToDB';
import { NextRequest, NextResponse } from 'next/server';

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectToDB();
    const deleteComment = await Comments.findByIdAndDelete(params.id);
    return new NextResponse(JSON.stringify(deleteComment));
  } catch (error) {
    return new NextResponse('error' + error)
  }
}