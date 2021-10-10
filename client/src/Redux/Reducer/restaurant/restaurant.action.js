import axios from "axios";

//redux types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) =>{
    try {
        const restuarntList = await axios({
            method: "GET",
            url: "http://localhost:3000/restaurant",
    
        });
        return dispatch({ type: GET_RESTAURANT, payload :restuarntList.data});
        
    } catch (error) {
        return dispatch({ type: "ERROR", payload :error });

    }

};
export const getSpecificRestaurant = (_id) => async (dispatch) =>{
    try {
        const restaurant = await axios({
            method: "GET",
            url: `http://localhost:3000/restaurant/${_id}`,
    
        });
        return dispatch({ type: GET_SPECIFIC_RESTAURANT, payload :restaurant.data});
        
    } catch (error) {
        return dispatch({ type: "ERROR", payload :error });

    }

};