import { Rating, RoundedStar } from "@smastrom/react-rating";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import '@smastrom/react-rating/style.css';
const customStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#FAAF00',
    inactiveFillColor: '#DBDBDB',
};

const CollegeCard = ({ college }) => {
    const { _id, college_image, college_name, rating, number_of_research, admission_date } = college;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={college_image} className="h-[261px] w-full" alt="college" /></figure>
            <div className="card-body">
                <h2 className="card-title md:text-2xl title-color">{college_name}</h2>
                <div className="md:text-[15px] space-y-1">
                    <p className="text-gray-600"><span className="text-black font-medium">Admission Date:</span> {admission_date}</p>
                    <p className="text-gray-600 "><span className="text-black font-medium">Number Of Research:</span> {number_of_research}</p>
                </div>
                <div className="card-actions justify-between items-center mt-4">
                    <Rating
                        className=""
                        style={{ maxWidth: 110 }}
                        value={rating}
                        itemStyles={customStyles}
                        readOnly
                    />
                    <Link to={`/details/${_id}`} className="my-btn inline-flex items-center gap-1 lg:btn-md"> Details <HiArrowRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;