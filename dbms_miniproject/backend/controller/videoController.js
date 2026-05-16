import Video from '../model/Videos.js';

export const getVideosBySubject = async(req,res)=>{
    try{
        const {subject}=req.query;
        const videos=await Video.find({suject}).populate('uploadedBy','name');
        res.status(200).json(videos);
    }catch(err){
        res.status(500).json({
            message:"Failed to fetch videos",error:err.message
        });
    }
} ;

const createVideo = async(req,res)=>{
    try{
        const {title,description,videourl,subject,uploadedBy}=req.body;
        const newVideo = new Video({
            title,description,videourl,subject,uploadedBy
        });
        await newVideo.save();
        res.status(201).json(newVideo);
    }catch(err){
        res.status(500).json({
            message:"Failed to create video",error:err.message
        });
    }
};

const deleteVideo = async(req,res)=>{
    try{
        const {id}= req.params;
        await Video.findByIdAndDelete(id);
        res.status(200).json({message:"Video deleted successfully"});
    }catch(err){
        res.status(500).json({
            message:"Failed to delete video",error:err.message
        });
    }
};