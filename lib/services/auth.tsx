import { compare } from 'bcrypt';
import { connectToDB } from '../mongo/connectToDB';
import UserModel, { IUser } from '../models/User';

interface UserLoginData {
  username: string;
  password: string;
}

export const loginUser = async ({
  username,
  password,
}: UserLoginData): Promise<IUser | null> => {
  await connectToDB();
  if (!username || !password) {
    throw new Error('Username or Password was not provided');
  }

  const user: IUser | null = await UserModel.findOne({
    username,
  });

  if (!user) {
    throw new Error(`Username ${username} doesn't exist`);
  }

  if (user.password) {
    const isValid = await compare(password, user.password);

    if (!isValid) {
      throw new Error('Password is incorrect');
    }
  } else {
    throw new Error('Something went wrong X_X');
  }

  return user;
};
