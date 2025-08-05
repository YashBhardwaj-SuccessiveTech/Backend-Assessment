import { NextFunction, Request, Response } from "express";

const addstudentmidd = (req:Request,res:Response,next:NextFunction)=>{
    const {name, age, email, grade, createdAt} = req.body;
    try{
        if(!name || !age || !email || !grade || !createdAt || typeof name === "string"){
            return res.status(402).json({
                success:false,
                message:"all the fields required for addition"
            });
        }
        if(typeof name === "string" || typeof email === "string" || typeof grade === "string"){
            return res.status(402).json({
                success:false,
                message:"all the fields correct data type required for addition"
            });
        }
        next();
    }catch(error){
        return res.json({
            success:false,
            message:"inputs are not appropriate"
        })
    }
}

export default addstudentmidd;

