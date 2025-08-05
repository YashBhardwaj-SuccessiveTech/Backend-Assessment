import { Request, Response } from "express";
import user from "../models/user";

const getallstudents = async(req:Request, res:Response)=>{
    try{

        const data = await user.find({});

        res.status(200).json({
            success:true,
            message:"All students data shown here",
            data
        });
    }catch(error){
        return res.status(402).json({
            success:false,
            message:"error in getting student data"
        });
    }
}

export default getallstudents;