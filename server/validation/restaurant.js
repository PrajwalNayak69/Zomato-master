import joi from "joi";

export const ValidateRestaurantCity = (Restaurantobj) => {
    const Schema = joi.object({
        city: joi.string().required(),
       
     
    });
  
    return Schema.ValidateRestaurantObject(Restaurantobj);
  };

 

  export const ValidateRestaurantSearchString = (RestaurantSs) => {
    const Schema = joi.object({
        searchString: joi.string().required(),
       
     
    });
  
    return Schema.ValidateRestaurantSearchString(RestaurantSs);
  };