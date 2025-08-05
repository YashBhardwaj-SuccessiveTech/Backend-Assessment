import { Request, Response } from "express";
import user from "../models/user";

const addstudent = async (req:Request, res:Response)=>{
    

    try{
        console.log(req.body);
        const {name, age, email, grade, createdAt} = req.body;

        if(!name || !age || !email || !grade || !createdAt){
            return res.status(402).json({
                success:false,
                message:"all the fields required for addition"
            })
        }

        const existstudent = await user.findOne({email});
        if(existstudent){
            return res.json({
                success:false,
                message:"Student with same email exist"
            });
        }

        // const createdAt = Date.now();
        
        const newstudent = await user.create({name, age, email, grade, createdAt});

        res.status(200).json({
            success:true,
            message:"New Student added",
            newstudent
        });
    }
    catch(error){
        console.log(error);
        res.status(402).json({
            success:false,
            message:"some issue in adding student"
        });
    }
    
}

export default addstudent;