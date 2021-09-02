//importing dotenv variables
require("dotenv").config();

import  express  from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

//microservices route
import  Auth  from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Menu from "./API/Menu";
import Order from "./API/Orders";
import Review from "./API/Reviews";
import User from "./API/User";

//database connection
import ConnectDB from "./database/connection";

const zomato = express();

//application middlewares

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuration
googleAuthConfig(passport);
routeConfig(passport);

//application route
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/reviews", Review);
zomato.use("/user", User);

zomato.get("/", (req, res) => res.json ({ message:"Setup Complete"}));

zomato.listen(4000, () => ConnectDB().then(() =>
console.log("server is running🚀🚀"))
.catch((error) => 
console.log(error.message)
)
); 

