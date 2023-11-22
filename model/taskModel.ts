import { Document, Schema, Types, model } from "mongoose";

interface iTask{
    companyName: string
    email: string
    password: string
    staff: Array<{}>
};

interface iTaskData extends iTask, Document{};

const taskModel = new Schema(
    {
       companyName:{
        type: String
       },
       email:{
        type: String
       },
       password:{
        type: String
       },
       staff: [
        {
            type: Types.ObjectId,
            ref: "staff"
        }
       ]
    },
    {timestamps: true}
);

export default model<iTaskData>("Tasks", taskModel);