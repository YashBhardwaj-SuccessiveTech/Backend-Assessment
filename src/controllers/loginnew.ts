import { NextFunction, Request, Response } from "express";
import user from "../models/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

const loginnew = async (req:Request, res:Response, next:NextFunction)=>{
    const {email, password } = req.body;
    try{

        if(!email || !password){
            return res.json("email and password required");
        }

        const data = await user.findOne({email});
        if(!data){
            return res.send("not registed mail go to signup");
        }

        const payload = {
            id: data._id,
            email: data.email,
            password: data.password
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY as string, {expiresIn:"2h"});

        res.json({
            token,
            success:true,
            message:"login successful"
        })

    }catch(error){
        console.log(error);
        return res.json({
            success:false,
            message:"some issue in login"
        });
    }
}

export default loginnew;