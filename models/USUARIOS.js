import { Schema,model } from "mongoose";

const taskSchema= new Schema({
    
    nombre:{
        type:String,
       
        unique:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        trim:true

     },
     password:{
        type:String,
        required:true
     },
     done: Boolean,},{
        timestamps:true,
        versionKey:false
     
});
export default model('user', taskSchema);