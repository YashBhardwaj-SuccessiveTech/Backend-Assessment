import { faker } from "@faker-js/faker";
import { Request, Response } from "express";
import user from "../models/user";
import seed from "../models/seed";

interface User extends Request{
    user?:Array<{id:string,name:string,email:string}>
}

const mockdatafeed = async (req:User, res:Response)=>{
    try{
        const {count} = req.body;
        if(!count || count<0){
            return res.json({
                success:false,
                message:"give count of data"
            });
        }
        const users = [];

        for(let i=0;i<count;i++){
            users.push({
                id:faker.string.uuid(),
                name:faker.person.fullName(),
                email:faker.internet.email(),
            });
        }
        const data = await seed.insertMany(users);
        req.user = users;
        res.json({
            success:true,
            message:"data seeded successfully",
            data
        });
    }catch(error){
        console.log(error);
        res.json({
            success:false,
            message:"some error in adding mock data"
        });
    }
}

export default mockdatafeed;