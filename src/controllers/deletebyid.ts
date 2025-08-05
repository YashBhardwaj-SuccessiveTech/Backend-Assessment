import { Request, Response } from "express";
import user from "../models/user";

const deletebyid = async (req:Request,res:Response)=>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(402).json({
                success:false,
                message:"Id not found"
            });
        }
        const data = user.findOne({id});
        if(!data){
            return res.status(402).json({
                success:false,
                message:"not have data of this id"
            });
        }
        const deleteddata = user.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"Data deleted successfully",
            deleteddata : deleteddata
        });
    }catch(error){
        return res.status(402).json({
            success:false,
            message:"some error in deletion"
        });
    }

}

export default deletebyid;