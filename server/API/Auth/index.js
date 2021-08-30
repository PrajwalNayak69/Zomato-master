import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//modals
import { UserModel } from "../../database/user" 

const Router = express.Router();
/*
Route: /signup
Des:  Signup with email and password
Params: none
Access: Public
Method: POST
*/

Router.post("/signup", async (req, res) => {
try {
    const {email, password, fullname, phonenumber} = req.body.credentials;
    //check whether email exist
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phonenumber });
    
    if(checkUserByEmail || checkUserByPhone ) {
        return res.json({error: "user already exist!"});
    }


    //hash Paasword
    const bcryptSalt = await bcrypt.genSalt(8);

    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    //save to DB
    await UserModel.create({
        ...req.body.credentials,
    password: hashedPassword,
    });
    //generate JWT auth token
    const token = jwt.sign({user:{fullname, email} }, "ZomatoAPP");
    //return
    return res.status(200).json({token, status:"success"});

} catch (error) {
    return res.status(500).json({error: error.message })
    
}
});

export default Router;