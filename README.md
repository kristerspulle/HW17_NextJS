This is a [Next.js](https://nextjs.org/) Blog Application project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

Create an account [MongoDB](https://www.mongodb.com/products/platform/cloud) to use database services on cloud.

## Getting Started
First, install all the necessary dependencies:

```bash
npm i
```

Second, create a .env.local file and paste in the following:

```bash
MONGO_USERNAME = YOUR_USERNAME
MONGO_PASSWORD = YOUR_PASSWORD
MONGO_CLUSTER = YOUR_CLUSTER

NEXTAUTH_SECRET = SECURE_KEY
NEXTAUTH_URL = http://localhost:3000
```

Replace 'MONGO_USERNAME', 'MONGO_PASSWORD', 'MONGO_CLUSTER', 'NEXTAUTH_SECRET' with your credentials.

Third, update 'MONGO_URI' with your database connection URI at 'lib\mongo\connectToDB.tsx':

```bash
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.olb4npa.mongodb.net/your_database_name`
```

Fourth, create an admin user by heading over to 'app\api\user\route.tsx':

```bash
export const POST = async () => {
    try {
        await connectToDB()
        const passwordHash = await hash("YOUR_PASSWORD", 10)
        const adminUser = await UserModel.create({
            username: "YOUR_USERNAME",
            password: passwordHash,
        })
        console.log("User created")
        return NextResponse.json({
            adminUser
        })
    }catch (error) {
        console.error("Error message: ", error)
    }
}
 ```

Replace 'YOUR_USERNAME' and 'YOUR_PASSWORD' with your admin credentials.

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  
To access admin page head over to [http://localhost:3000/api/auth/signin](http://localhost:3000/api/auth/signin).

## Database Structure

You can see all the necessary data types for blogs, comments, tags and users at 'lib\models'.




