import express from "express";
import passport from "passport";

//databse model
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /new
Des      add new food review or rating
Params    none
Body        Review Obejct
Access    Public
Method    post
*/
Router.post("/food/new", async (req, res) =>{ 
    try {
        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({ review: "Succesfully created a review"});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});
/*
Route     /delete
Des      delete Review
Params    _id
Body       none
Access    Public
Method   delete
*/
Router.delete("/delete/:_id", async( req, res) =>{ 
    try {
        const { _id } = req.params;
        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ review: "Succesfully deleted a review"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


export default Router;