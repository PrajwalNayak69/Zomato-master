import express from "express";
import passport from "passport";

//databse model
import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /list
Des       Get all list  menu based on id
Params    _id
Access    Public
Method    get 
*/

Router.get("/list/:id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menu = await MenuModel.findOne( _id);

        return res.json({ menu });

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route     /imag
Des       Get all menu image based on id 
Params    _id
Access    Public yes
Method    get 
*/

Router.get("/image/:id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menu = await ImageModel.findOne( _id);

        return res.json({ menu });

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});