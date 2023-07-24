import { useLoaderData } from "react-router-dom";
import AdmissionProcess from "../shared/AdmissionProcess";
import Marquee from "react-fast-marquee";
import Events from "../shared/Events";

const CollegeDetails = () => {
    const data = useLoaderData();
    const { college_image, college_name, events_facilities, admission_date, description } = data;

    return (
        <section className="px-4 md:px-24 pb-16 lg:pb-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className='bg-base-200 flex p-1 lg:p-3 gap-3 my-5'>
                <button className='btn btn-neutral'>Notice</button>
                <Marquee speed={100} className='font-semibold'>
                    <span className='px-5'>Admission Last Date {admission_date}   !   Apply Now .....</span>
                    Admission Last Date {admission_date}   ! ..... Hons 2nd year form fill up (Exam 2023)
                </Marquee>
            </div>
            <div className="lg:flex justify-between gap-10 mb-20">
                <div className="lg:w-[760px] border rounded-md p-5">
                    <img className="rounded-md w-full lg:h-[480px]" src={college_image} alt="college" />
                    <h3 className="text-2xl md:text-3xl font-bold tracking-wide pt-5 text-center title-color">College Name: {college_name}</h3>
                    <div className="text-gray-600 mt-12">
                        <p className="text-justify">{description}</p>
                    </div>
                </div>
                <AdmissionProcess />
            </div>
            <div>
                <h3 className="font-semibold text-2xl md:text-3xl border-b-2 border-teal-500 pb-2 w-fit mx-auto mb-8 md:mb-12">Event Facilities</h3>
                <Events eventInfo={events_facilities} />
            </div>
        </section>
    );
};

export default CollegeDetails;