import { Request, Response } from "express";
import user from "../models/user";

const updatestudent = async(req:Request, res: Response)=>{
    const {id} = req.params;
    if(!id){
        return res.json({
            success:false,
            message:"id not found"
        });
    }
    try{
        const data = await user.findByIdAndUpdate(id,req.body);
        return res.status(200).json({
            success:true,
            message:"data updated successfully",
            dataupdated:data
        });
    }catch(error){
        return res.status(402).json({
            success:false,
            message:"Unable to update student data"
        });
    }
}

export default updatestudent;