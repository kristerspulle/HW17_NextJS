import { connectToDB } from '@/lib/mongo/connectToDB';
import Blog from '@/lib/models/blog';
import { NextRequest, NextResponse } from 'next/server';
import { Tag } from '@/lib/models/tag';

export const GET = async () => {
  try {
    await connectToDB();
    const tags = await Tag.find()
    const blogs = await Blog.find().populate('tag', 'tag')
    return new NextResponse(JSON.stringify(blogs));
  } catch (error) {
    return new NextResponse('err' + error);
  }
};

export const POST = async (request: NextRequest) => {
  const { title, image, paragraph, tag } = await request.json();
  await connectToDB();
  await Blog.create({ title, image, paragraph, tag });
  return NextResponse.json({ message: 'Comment added' }, { status: 201 });
};