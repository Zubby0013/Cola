import { Request, Response } from "express";
import taskModel from "../model/taskModel";


export const createUser = async(req: Request, res:Response)=>{
    try {
        return res.status(201).json({
            message:"success"
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }
}


export const readUser = async(req: Request, res:Response)=>{
    try {
        return res.status(201).json({
            message:"success in getting"
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }
    
};

export const readOneUser = async(req: Request, res:Response)=>{
    try {
        const {userID} = req.params

        const user = await taskModel.find({userID})
        return res.status(201).json({
            message:"success in getting one user",
            data: user
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }
    
};


export const deleteUser = async(req: Request, res:Response)=>{
    try {
        const {userID} = req.params
        const user = await taskModel.findByIdAndDelete({userID})

        return res.status(200).json({
            message:"success in deleting"
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }};
