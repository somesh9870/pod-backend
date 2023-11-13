import { EPProject } from "../models/episode.model.js";
import { Project } from "../models/project.model.js";

export const getProjects = async (req, res) => {
  try {
    let userId = req.params.userId;
    const projects = await Project.find({ user: userId }).populate("user");

    return res.status(200).json({ status: true, data: projects });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

// ...

export const createProject = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { projectName } = req.body;

    if (!projectName) {
      return res
        .status(404)
        .json({ message: "Project name is required", status: false });
    }

    const data = await Project.create({
      projectName: projectName,
      user: userId,
    });

    if (data) {
      return res.status(201).json({ status: true, data: data });
    } else {
      return res.status(400).json({ status: false, message: "error" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: error, message: error.message });
  }
};

// ...

export const getProjectEpisodes = async (req, res) => {
  try {
    const projectId = req.params.project;
    const episodes = await EPProject.find({ project: projectId }).populate(
      "project"
    );

    return res.status(200).json({ status: "foos", data: episodes });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

// ...

export const postProjectEpisode = async (req, res) => {
  try {
    const projectId = req.params.projectId;

    if (!projectId) {
      return res.status(404).json({ status: false, message: "id is required" });
    }

    const { title, description } = req.body;

    if (!title && !description) {
      return res
        .status(404)
        .json({ status: false, message: "fill all required fields" });
    }

    const postEp = await EPProject.create({
      title,
      description,
      project: projectId,
    });

    return res
      .status(201)
      .json({ status: true, message: "successfully created", data: postEp });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

// ...------------------------------------------------------------------------

export const updateEd = async (req, res) => {
  try {
    let EPprojectId = req.params.EPprojectId;
    let data = req.body;

    const updateEdProject = await EPProject.findByIdAndUpdate(
      EPprojectId,
      data,
      { new: true }
    );

    return res.status(201).json({ status: true, data: updateEdProject });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

// ...---------------------------------------------------------------------------------

export const deleteEp = async (req, res) => {
  try {
    let EPprojectId = req.params.EPprojectId;

    const data = await EPProject.findByIdAndDelete(EPprojectId);
    return res
      .status(200)
      .json({ status: true, data: data, message: "deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// export const getProject = async(req,res)=>{
//     try {
//         let user= req.pram.user;
//         const data= await Project.find({user: user})

//     } catch (error) {
//         return res.status(500).json({message: error.message, status:false});
//     }
// }
// post project -----------------------------------------------------------------

// export const createProject=async(req,res)=>{
//     try {
//         const userId= req.pram.userId;
//      const {projectName}=req.body;
//      if(!projectName){
//         return res.status(404).json({message:'Project name is required',status:false}); }

// const data = await Project.create({projectName,user:userId});
// if(data){
//     return res.status(201).json({status:false, data:data});
// }else{
//     return res.status(400).json({status:false,message:'error'});
// }

//     } catch (error) {
//        res.status(500).json({status:false, message:error.message});
//     }
// };

// //post request for ep--------------------------------------------------------------------
// export const postProjectEpisode= async(req,res)=>{
//     try {
//         const projectId= req.params.projectId;
//         if(!projectId){
//             return res.status(404).json({status:false, message:"id is required"});
//         }
//         const {title, description}= req.body;
//         if(!title && !description){
//             return res.status(404).json({status:false, message:'fill all required fields'});
//         }
//   const postEp= await Project.create({title, description,project:projectId});
//   return res.status(201).json({status:true, message:"succesfully created",data:postEp});

//     } catch (error) {
//         return res.status(500).json({status:false, message:error.message});
//     }
// };

// export const getProjectEp= async(req, res)=> {
//     try {
//         const {projectId}= req.params;

//         const getProjectEpdata= await EPProject.find({project:projectId});

//         return res.status(200).json({status:true, data:getProjectEpdata});

//     } catch (error) {
//       return res.status(500).json({status:false, message:error.message});
//     }
// };

// export const updateEd= async(req, res)=> {
// try {
//     let EPprojectId= req.params.EPprojectId;
//     let data = req.body;

//     const updateEdProject= await EPProject.findbyIDandupdate({EPprojectId},{data:data},{new:true});

//     return res.status(201).json({status:true, data:updateEdProject})

// } catch (error) {
//    return res.status(500).json({status:false, message:error.message});
// }
// };

// export const deleteEp= async(req, res)=> {
//     try {
//         let EPprojectId= req.params.EPprojectId;

//         const data= await EPProject.findbyIdanddelete({EPprojectId});
//     return res.status(200).json({status:true, data:data,message:'deleted successfully'});

//     } catch (error) {
//         return res.status(500).json({error:error.message});
//     }
// };
