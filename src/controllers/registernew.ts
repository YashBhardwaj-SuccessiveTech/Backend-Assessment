import { NextFunction, Request, Response } from "express";
import user from "../models/user";

const registernew = async(req:Request, res:Response, next:NextFunction)=>{
    const {name, age, email, grade , createdAt,password}= req.body;

    try{
        if(!name || !age || !email || !grade || !createdAt){
            return res.json({
                message:"all the fields are required name age email grade createdAt"
            })
        }

        // check if already exist
        const existuser = await user.findOne({email});
        if(existuser){
            return res.json({message:"user already registered do login"});
        }

        const data = user.create({name , age, email, grade, createdAt,password});
        return res.json({
            success:true,
            message:"user registered",
            data
        });

    }catch(error){
        console.log(error);
        return res.json({
            success:false,
            message:"some error in registering student"
        });
    }
}

export default registernew;