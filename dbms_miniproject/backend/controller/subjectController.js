import Subject from '../model/Subject.js';

export const getSubjectsByYear = async(req,res)=>{
    try{
        const {year} = req.query;
        const subjects = await Subject.find({year});
        res.status(200).json(subjects);
    }catch(err){
        res.status(500).json({
            message:"Failed to fetch subjects",error:err.message
        });
    }
};
