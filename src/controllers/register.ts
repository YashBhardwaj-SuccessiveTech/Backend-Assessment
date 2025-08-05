import { Request, Response } from "express";
import user from "../models/user";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

const register = async(req:Request,res:Response)=>{
    try{
        const {name, email} = req.body;
        const existuser = await user.findOne({email});
        const payload = {
            name: existuser?.name,
            email:existuser?.email,
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY as string,{expiresIn:"2h"});
        res.json({
            success:true,
            message:"token created for access"
        });
    }catch(error){
        return res.send({
            success:false,
            message:"error in generating token"
        })
    }
}

export default register;