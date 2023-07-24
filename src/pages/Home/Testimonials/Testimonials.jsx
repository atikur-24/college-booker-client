import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const customStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#CD9003',
    inactiveFillColor: '#A1A1A1',
};

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://college-booker-server-zeta.vercel.app/feedback')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-container">
            <h2 className='text-2xl md:text-[42px] pb-2 md:pb-4 font-bold tracking-wide title-color text-center'>Testimonials</h2>
            <p className="text-gray-600 lg:text-center pb-10 pt-2 lg:mx-10"> Unveiling the Secrets of Popular Colleges: Where Dreams Take Flight. Popular colleges embody a perfect blend of academic excellence, vibrant campus life, and unmatched career opportunities.</p>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="px-16 text-center space-y-10">
                            <Rating
                                className="mx-auto mt-10"
                                style={{ maxWidth: 200 }}
                                value={review.rating}
                                itemStyles={customStyles}
                                readOnly
                            />
                            <FaQuoteLeft className="text-8xl mx-auto" />
                            <p>{review.details}</p>
                            <h3 className="text-2xl font-medium tracking-wide text-[#CD9003]">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;