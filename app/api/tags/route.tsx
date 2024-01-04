import { Tag } from '@/lib/models/tag';
import { connectToDB } from '@/lib/mongo/connectToDB';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  
  try {
    await connectToDB();
    const tag = await Tag.find()
    return new NextResponse(JSON.stringify(tag));
  } catch (error) {
    return new NextResponse('err' + error);
  }
};

export const POST = async (request: NextRequest) => {
  const { tag } = await request.json();
  await connectToDB();
  await Tag.create({ tag });
  return NextResponse.json({ message: 'Comment added' }, { status: 201 });
};