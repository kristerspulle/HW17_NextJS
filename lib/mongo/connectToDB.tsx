import mongoose from 'mongoose';
// require('dotenv').config();

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.omb9nhp.mongodb.net/blogs`

export const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Mongo connection successful");
} catch (error) {
    console.error("Error on connecting DB: ", error);
}
}