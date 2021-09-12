import React from 'react';

//components
import FoodItem from './FoodItem';

const FoodList = (props) => {
    return (
        <>
            <div className="">
                     <h2 className="sticky bg-white w-full top-0 px-2 py-1 z-10 text-xl font-semibold">
                        {props.title}</h2>
                    <div className="flex flex-col gap-3">
                    {props.items.map((item) => (
                          <FoodItem {...item} />
                      ))}
                    </div>
                      
                      </div>
        </>
    )
}

export default FoodList
