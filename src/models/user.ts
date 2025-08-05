import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    grade:{
        type:String,
        required:true,
    },
    createdAt:{
        type:String,
        required:true,
    },
    password:{
        type:String,
    }
});


export default mongoose.model("user",userSchema);
