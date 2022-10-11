import { Schema,model } from "mongoose";

const taskSchema= new Schema({
    
    codigo:{
        type:String,
       
        unique:true,
        trim:true

    },
    nombre:{
        type:String,
       
        unique:true,
        trim:true

    },
    valor:{
        type:String,
        required:true,
        trim:true

     },
    descripcion:{
        type:String,
        required:true
     },
     done: Boolean,},{
        timestamps:true,
        versionKey:false
     
});
export default model('product', taskSchema);