import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    subjectcode:{
        type:String,
        required:true,
        unique:true,
    },
    year:{
        type:Number,
        required:true,
    },
    semester:{
        type:Number,
        required:true,
    }
});

export default mongoose.model('Subject',subjectSchema);