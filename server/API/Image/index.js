import express from "express";
import passport from "passport";
import AWS from "aws-sdk";
import multer from "multer";

//databse model
import { ImageModel } from "../../database/allModels";

//utilities
import { s3Upload } from "../../Utils/AWS/s3";


const Router = express.Router();

//multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });


/*
Route     /
Des       Get Image Details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) =>{
  try {
    const image = await ImageModel.findById(req.params._id);
    return res.json({image});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})
/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
      const image = await ImageModel.findById(req.params._id);
  
      return res.json({ image });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


/*
Route     /image
Des       uploads given image to s3 bucket, and saves file to mongodb
Params    _id
Access    Public
Method    get 
*/
Router.post("/", upload.array("file", 4),  async (req, res) => {
    try {
       const file = req.file;

    //s3 bucket options
    const bucketOptions = {
        Bucket: "name",
        Key: file.originalname,
        Body: file.buffer,
        ContentTyoe: file.mimetype,
        ACL: "public-read",
    };

    /*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
      const image = await ImageModel.findById(req.params._id);
  
      return res.json({ image });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
    const uploadImage = await s3Upload(bucketOptions);

    return res.status(200).json({ uploadImage });
        
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});
 

export default Router;