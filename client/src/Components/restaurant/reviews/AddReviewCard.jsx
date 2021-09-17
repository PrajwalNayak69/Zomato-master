import React,{ useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import ReviewModal from './ReviewModal';

const AddReviewCard = () => {
    const HandleRating = (value) => console.log(value);
    const [isOpen , setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    return (
        <>
                <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}/>
             <h3 className="text-xl font-medium">Rate your Experince for</h3>
               <div className=" flex items-center gap-3">
               <div className="flex items-center gap-2">
                <input type="radio" name="review" id="dining"/>
                    <label htmlFor="dining">Dining</label>
                </div>
                <div className="flex items-center gap-2">
                <input type="radio" name="review" id="delivery" />
                    <label htmlFor="delivery">Delivery</label>
                </div>
               </div>
                <div className="">
                <ReactStars count={5} onchange={HandleRating} size={24}/>
                </div>
               <button onClick={openModal} className="text-zomato-400" >Write a review</button>
        </>
    )
}

export default AddReviewCard
