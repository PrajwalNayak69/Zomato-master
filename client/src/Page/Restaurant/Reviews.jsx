import React,{useState} from 'react';
import ReactStars from 'react-rating-stars-component';


//componet
import Reviewcard from '../../Components/restaurant/reviews/Reviewcard';
import AddReviewCard from '../../Components/restaurant/reviews/AddReviewCard';



const Reviews = (props) => {
    const [reviews, setreviews] = useState(["","",""]);

    const HandleRating = (value) => console.log(value);
    return (
        <>
           <div className="w-full flex flex-col md:flex-row relative">
           <div className="w-full md:2-8/12 flex flex-col gap-3">
               <div className="md:hidden">
               <AddReviewCard />
               </div>
            {reviews.map((review) => (
            <Reviewcard {...review} />
            ))}
            </div>
            <aside
            style={{ height: "fit-content "}}
               className="hidden  md:flex items-start md:w-2/5 sticky bg-white p-3 top-2 shadow-md rounded-xl  flex-col gap-4" >
                <AddReviewCard />
            </aside>
           </div>
        </>
    )
}

export default Reviews
