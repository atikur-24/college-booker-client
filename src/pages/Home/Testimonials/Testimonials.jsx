import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Spinner from '../../../components/Spinner';

const customStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#FAAF00',
    inactiveFillColor: '#DBDBDB',
};

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://college-booker-server-zeta.vercel.app/feedback')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setSpinner(false);
            })
    }, [])
    return (
        <section className="my-container">
            <h2 className='text-2xl md:text-[42px] pb-2 md:pb-4 font-bold tracking-wide title-color text-center'>Testimonials</h2>
            <p className="text-gray-600 font-medium lg:text-center pb-10 pt-2 lg:mx-10">What Our Client Say About Specific College</p>
            { spinner && <Spinner /> }
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="px-16 text-center space-y-10">
                            <Rating
                                className="mx-auto mt-10 max-w-[130px] lg:max-w-[200px]"
                                value={review.rating}
                                itemStyles={customStyles}
                                readOnly
                            />
                            <FaQuoteLeft className="text-4xl lg:text-8xl mx-auto" />
                            <p className='text-gray-600'>{review.feedback}</p>
                            <h3 className="text-xl lg:text-2xl font-medium tracking-wide text-[#CD9003]">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;