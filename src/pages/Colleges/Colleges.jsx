import { useEffect, useState } from "react";
import BannerSection from "../shared/BannerSection";
import CollegeCard from "./CollegeCard";

const Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    return (
        <>
            <BannerSection>All College</BannerSection>
            <section className="my-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center place-content-between">
                    {
                        colleges?.map(college => <CollegeCard key={college._id} college={college} />)
                    }
                </div>
            </section>
        </>
    );
};

export default Colleges;