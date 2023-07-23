import { HiOutlineAcademicCap } from "react-icons/hi";
import BannerSection from "../shared/BannerSection";
import { Link, useLoaderData } from "react-router-dom";

const Admission = () => {
    const colleges = useLoaderData();
    return (
        <>
            <BannerSection>Admission</BannerSection>
            <section className="my-container">
                <h2 className="text-2xl md:text-4xl mx-auto font-semibold tracking-wide mb-5 md:mb-8 border-b-2 border-teal-500 w-fit pb-3">Available colleges for admission</h2>
                <div className="grid md:grid-cols-3 gap-5 md:gap-8 font-semibold text-xl pt-3 md:pt-5">
                    {
                        colleges.map(college => <Link key={college._id} to={`/candidateInfo/${college._id}`} className="title-color border rounded-md p-3 md:p-5 bg-gray-100 hover:text-teal-600 transition-colors cursor-pointer shadow-md inline-flex items-center justify-center gap-2"><HiOutlineAcademicCap />{college.college_name}</Link>)
                    }
                </div>
            </section>
        </>
    );
};

export default Admission;