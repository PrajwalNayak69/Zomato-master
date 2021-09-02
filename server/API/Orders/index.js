import express from "express";
import passport from "passport";

//databse model
import { OrderModel } from "../../database/allModels";

const Router = express.Router();

//validation

import { ValidateOrderId } from "../../validation/orders";

/*
Route     /
Des       Get all the ordes based on id
Params    _id
Access    Public
Method    get 
*/
Router.get("/:_id", passport.authenticate("jwt"),{session: false}, async (req, res) => {
    try {
        await ValidateOrderId(req.params);
        const {_id} = req.params;
        const getOrders = await OrderModel.findOne({ user: _id });
        if(!getOrders){
            return res.status(404).json({error: error.message});
        }
        return res.status(200).json({orders: getOrders});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
/*
Route     /new
Des       Add new Order
Params    _id
Access    Public
Method    Post
*/
Router.post("/new/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { orderDetails } = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate({
            user: _id,
        },
        {
           $push: { orderDetails }, 
        },
        {new: true });

        return res.json({order: addNewOrder });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;