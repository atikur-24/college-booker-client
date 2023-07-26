import { useEffect, useState } from "react";
import BannerSection from "../shared/BannerSection";
import CollegeCard from "./CollegeCard";
import Spinner from "../../components/Spinner";
import DynamicTitle from "../../components/DynamicTitle";

const Colleges = () => {
    const [colleges, setColleges] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://college-booker-server-zeta.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {
                setColleges(data);
                setSpinner(false)
            })
    }, [])

    return (
        <>
        <DynamicTitle>Colleges</DynamicTitle>
            <BannerSection>All College</BannerSection>
            <section className="my-container">
            { spinner && <Spinner /> }
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