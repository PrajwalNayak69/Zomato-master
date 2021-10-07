import axios from "axios";

//redux types
import { GET_RESTAURANT } from "./restaurant.type";

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