import { NextFunction, Request, Response } from "express";

export const errorhandler = (err:Error, req:Request, res:Response, next:NextFunction)=>{
    console.log(err);
    return res.json({
        success:false,
        message:"Internal server error"
    })
}

