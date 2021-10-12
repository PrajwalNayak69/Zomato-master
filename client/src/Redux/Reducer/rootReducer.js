import { combineReducers } from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/Image.reducer";
import reviews from "./Reviews/Review.reducer";
import user from "./User/User.reducer";
import food from "./Food/Food.reducer"

const rootReducer = combineReducers({ restaurant, image, reviews, user, food});

export default rootReducer;
 