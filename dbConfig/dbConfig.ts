import { MongoServerClosedError } from "mongodb";
import mongoose from "mongoose";

export async function connect() {
  try{
    mongoose.connect("mongodb+srv://rohangaude34:vHAQbG909WoNH0LT@cluster0.eju6yz6.mongodb.net/bigDev")
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDb connected successfully');
    })

    connection.on('error', (err) => {
      console.log('MongoDb connection error.' + err)
      process.exit();
    })

  }catch (error){
    console.log('Something went wrong');
    console.log(error);
  }
}