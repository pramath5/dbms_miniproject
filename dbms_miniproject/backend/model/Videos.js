import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    videourl:{
        type:String,
        required:true,
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subject',
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }
});

export default mongoose.model('Video',videoSchema);