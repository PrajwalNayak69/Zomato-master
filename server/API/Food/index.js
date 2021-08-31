import express from "express";
import passport from "passport";

//databse model
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /r
Des       Get all food based on particular restaurant
Params    none
Access    Public
Method    get 
*/

Router.get("/r/:id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id });

        return res.json({ foods });

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route     /c
Des       Get all food based on particular category
Params    none
Access    Public
Method    get 
*/

Router.get("/r/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const foods = await FoodModel.find({ 
            category: { $regex: category, $options: "i" },
         });

        return res.json({ foods });

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});