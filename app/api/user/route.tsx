import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import { hash } from 'bcrypt';
import UserModel from '@/lib/models/User';
import { connectToDB } from '@/lib/mongo/connectToDB';

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'wtf you doing here?' });
  }
  return NextResponse.json({ message: 'hello' });
};

// export const POST = async () => {
//   try {
//     await connectToDB();
//     const passwordHash = await hash('password', 10);

//     const adminUser = await UserModel.create({
//       username: 'Admin',
//       password: passwordHash,
//     });

//     return NextResponse.json({
//       adminUser,
//     });
    
//   } catch (error) {
//     return NextResponse.json({ message: 'ss' });
//   }
// };
