import { Schema,model } from "mongoose";

const taskSchema= new Schema({

    title:{
        type:String,
       
        unique:true,
        trim:true

    },
     description:{
        type:String,
        required:true
     },
     done: Boolean,},{
        timestamps:true,
        versionKey:false
     
});
export default model('Task', taskSchema);
