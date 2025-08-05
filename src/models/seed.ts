import mongoose from "mongoose"

const seedSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

export default mongoose.model("seed",seedSchema);