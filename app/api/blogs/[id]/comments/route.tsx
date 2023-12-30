import Comments from '@/lib/models/comments';
import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongo/connectToDB';

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();
    const comments = await Comments.find({ blog: params.id });
    return new NextResponse(JSON.stringify(comments));
  } catch (error) {
    return new NextResponse('Error in fetching MongoDB data: ' + error);
  }
};

export const POST = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { name, comment } = await request.json();
  await connectToDB();
  await Comments.create({ name, comment, blog: params.id });
  return NextResponse.json({ message: 'Comment added' }, { status: 201 });
};
