import express from "express";
import passport from "passport";

//databse model
import { UserModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /:_id
Des       Get user data
Params    _id
body        none
Access    Public
Method    get 
*/
Router.get("/:_id", async(req, res)=> {
    try {
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);

        return res.json({ user: getUser });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});
/*
Route     /update/:_id
Des       update user data
Params    _id
body       user data
Access    Public
Method    put
*/
Router.put("/update/:_id", async  (req, res) => {
    try {
        const { _id } = req.params;
        const { userData } = req.body;
    
        const updateUserData = await UserModel.findByIdAndUpdate( _id, {
            $set: userData,
        },
        {
            new: true
        });
        return res.json({user: updateUserData });
        
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;