import mongoose, { connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = await mongoose.connection;
    connection.on("connected", () => {
      console.log(`Mongoose connected to ${connection.name}`);
    });
    connection.on("error", (err) => {
      console.log(`Mongoose error: ${err}`);
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong!");
    console.log(error);
  }
}
