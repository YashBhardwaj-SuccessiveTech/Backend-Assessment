import { Request, Response } from "express";
import user from "../models/user";

const studentbyid = async(req: Request,res: Response)=>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(402).json({
                success:false,
                message:"Id not found"
            });
        }
        const data = await user.findById(id);
        if(!data){
            return res.status(402).json({
                success:false,
                message:"no student found"
            });
        }
        console.log(data);
        res.status(200).json({
            success:true,
            message:"Data shown",
            data
        });
    }catch(error){
        res.status(402).json({
            success:false,
            message:"some error in showing data"
        });
    }
}

export default studentbyid;