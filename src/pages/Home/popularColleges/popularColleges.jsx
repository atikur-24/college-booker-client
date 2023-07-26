// import { useEffect, useState } from 'react';
import shape from '../assets/images/others/shape.png';
// import CollegeCard from '../../Colleges/CollegeCard';
// import Spinner from '../../../components/Spinner';

const popularColleges = () => {
    // const [colleges, setColleges] = useState([]);
    // const [spinner, setSpinner] = useState(true);
    // const [searchName, setSearchName] = useState("");

    // useEffect(() => {
    //     fetch('http://localhost:5000/colleges')
    //         .then(res => res.json())
    //         .then(data => {
    //             setColleges(data.slice(0, 3));
    //             setSpinner(false);
    //         })
    // }, [])

    // const handleSearch = () => {
    //     fetch(`http://localhost:5000/getByName/${searchName}`)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         // setColleges(data);
    //       });
    //   };

    return (
        <>
        {/* home page top banner */}
            <div className="relative bg-gradient-to-r from-rose-100 to-blue-100 h-48 md:h-80">
                <img src={shape} className='absolute left-6 top-1/4 w-20 md:w-40' alt="shape" />
                <div className='flex items-center justify-center h-full'>
                    <div className='text-center'>

                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered" />
                                <button className="btn btn-square btn-accent">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <img src={shape} className='absolute right-6 top-1/4 w-20 md:w-40' alt="shape" />
            </div>

            {/* popular colleges card */}
            <section className="my-container">
                <h2 className='text-2xl md:text-[42px] pb-2 md:pb-4 font-bold tracking-wide title-color text-center'>Popular Colleges</h2>
                <p className="text-gray-600 lg:text-center pb-10 pt-2 lg:mx-10"> Unveiling the Secrets of Popular Colleges: Where Dreams Take Flight. Popular colleges embody a perfect blend of academic excellence, vibrant campus life, and unmatched career opportunities.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center place-content-between">
                    {/* {
                        colleges?.map(college => <CollegeCard key={college._id} college={college} />)
                    } */}
                </div>
            </section>

        </>
    );
};

export default popularColleges;