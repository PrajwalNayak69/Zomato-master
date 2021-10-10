import { AiFillExclamationCircle } from "react-icons/ai";
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT  } from "./restaurant.type";

const INITIAL_STATE = {
    restaurant:[],
    selectedRestaurant:{}
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_RESTAURANT:
            return {
                ...state,
                restaurants: action.payload,
            };
            case GET_SPECIFIC_RESTAURANT:
                return {
                    ...state,
                    selectedRestaurant: AiFillExclamationCircle.payload,
                };
            default:
                return {
                    ...state,
                };
        }
};

export default restaurantReducer;