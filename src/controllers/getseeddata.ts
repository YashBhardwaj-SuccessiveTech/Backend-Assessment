// GET /students – Fetch all students with pagination
// (?page=1&limit=10) and sorting (?sortBy=name&order=asc)

import { Request, Response } from "express";
import seed from "../models/seed";

const getseeddata = async (req:Request,res:Response)=>{
    try{
        
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 3;
        let sortBy = (req.query.sortBy as string) || "name";
        const order = (req.query.order as string) === "desc" ? -1 : 1;

        let skip = (page-1)*limit;
        const data = await seed.find({}).sort({ [sortBy]:order}).skip(skip).limit(limit);
        const totaldocs = await seed.countDocuments();

        res.json({
            success:true,
            message:"data shown",
            totaldocs,
            data
        });
    }catch(error){
        return res.json({
            success:false,
            message:"some error in pagination"
        })
    }
}

export default getseeddata;