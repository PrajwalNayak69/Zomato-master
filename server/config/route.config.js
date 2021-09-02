import JwtPassport from "passport-jwt";

//database Model
import { UserModel } from "../database/user";

const JWTStratergy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequests: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZomatoAPP",
};

export default (passport) => {
    passport.use(
        new JWTStratergy(options, async(jwt__payload, done) => {
            try {
                const doesUserExist = UserModel.findById(jwt__payload.user);
                if(!doesUserExist) return done(null, false);
            } catch (error) {
                
            }
        })
    )
} 
