import { Request, Response } from "express";
import taskModel from "../model/taskModel";


export const createUser = async(req: Request, res:Response)=>{
    try {
        const {companyName, email, password} = req.body
        const user = await taskModel.create({companyName, email, password})
        return res.status(201).json({
            message:"success",
            data:user
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }
}


export const readUser = async(req: Request, res:Response)=>{
    try {

        const user = await taskModel.find()
        return res.status(201).json({
            message:"success in getting",
            data:user
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
            message:"success in deleting",
            data:user
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }};


    export const updateUser = async(req: Request, res:Response)=>{
        try {
            const {userID} = req.params
            const user = await taskModel.findByIdAndUpdate({userID})
    
            return res.status(200).json({
                message:"success in updating",
                data:user
            })
        } catch (error) {
            return res.status(404).json({
                message:"error"
            })
        }};
    