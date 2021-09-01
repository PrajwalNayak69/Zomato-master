import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

//validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

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
    await ValidateSignup(req.body.credentials);

    await UserModel.findbyEmailAndPhone(req.body.credentials);
    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /signin
Des       Signin with email and password
Params    none
Access    Public
Method    POST  
*/
Router.post("/signin", async (req, res) => {
    try {
    await ValidateSignin(req.body.credentials);

     const user = await UserModel.findByEmailAndPassword(req.body.credentials);
      const token = user.generateJwtToken();
      return res.status(200).json({ token, status: "success" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
 /*
Route     /google
Des       google signin
Params    none
Access    Public
Method    GET
*/
Router.get(
    "/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
  );
  
 /*
Route     /google/callback
Des       google signin callback
Params    none
Access    Public
Method    GET
*/
Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}),
(req, res)=>{
    return res.json({token: req.session.passport.user.token});
});

export default Router;