import mongoose from 'mongoose';

const allowedroles=['admin','student','teacher'];

const userSchema= new mongoose.Schema({
    name:{
        required:true,
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        mainLength:6,
    },
    role:{
        type:String,
        required:true,
        enum:allowedroles,
        default:'student',
    },
},{timestamps:true});

export default mongoose.model('User',userSchema);