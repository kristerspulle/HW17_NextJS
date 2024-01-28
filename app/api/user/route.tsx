import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import { connectToDB } from '@/lib/mongo/connectToDB';
import UserModel from '@/lib/models/User';
import { hash } from 'bcrypt';

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'wtf you doing here?' });
  }
  return NextResponse.json({ message: 'hello' });
};

// export const POST = async () => {
//     try {
//         await connectToDB()
//         const passwordHash = await hash("YOUR_PASSWORD", 10)
//         const adminUser = await UserModel.create({
//             username: "YOUR_USERNAME",
//             password: passwordHash,
//         })
//         console.log("User created")
//         return NextResponse.json({
//             adminUser
//         })
//     }catch (error) {
//         console.error("Error message: ", error)
//     }
// }
