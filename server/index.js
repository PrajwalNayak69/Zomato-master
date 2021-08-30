//importing dotenv variables
require("dotenv").config();

import  express  from "express";
import cors from "cors";
import helmet from "helmet";

//microservices route
import  Auth  from "./API/Auth";

//database connection
import ConnectDB from "./database/connection";

const zomato = express();

//application middlewares

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

//application route
zomato.use("/auth", Auth);


zomato.get("/", (req, res) => res.json ({ message:"Setup Complete"}));

zomato.listen(4000, () => ConnectDB().then(() =>
console.log("server is running🚀🚀"))
.catch((error) => 
console.log(error.message)
)
); 

