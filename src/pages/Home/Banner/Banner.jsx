import { useEffect, useState } from "react";
import HomeBanner from "../../../components/HomeBanner";
import CollegeCard from "../../Colleges/CollegeCard";

const Banner = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data.slice(0, 3)))
    }, [])

    return (
        <>
            <HomeBanner setColleges={setColleges} />
            <section className="my-container">
            <h2 className='text-2xl md:text-[42px] pb-2 md:pb-4 font-bold tracking-wide title-color text-center'>Popular Colleges</h2>
            <p className="text-gray-600 lg:text-center pb-10 pt-2 lg:mx-10"> Unveiling the Secrets of Popular Colleges: Where Dreams Take Flight. Popular colleges embody a perfect blend of academic excellence, vibrant campus life, and unmatched career opportunities.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center place-content-between">
                    {
                        colleges?.map(college => <CollegeCard key={college._id} college={college} />)
                    }
                </div>
            </section>
        </>
    );
};

export default Banner;