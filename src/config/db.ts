import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectDB = ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL!);
        console.log("database connected successfully");
    }catch(error){
        console.log("some error in connection");
    }

}
export default connectDB;

