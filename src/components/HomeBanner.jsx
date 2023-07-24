import { useState } from 'react';
import shape from '../assets/images/others/shape.png';

const HomeBanner = ({ setColleges }) => {
    const [searchName, setSearchName] = useState("");

    const handleSearch = () => {

        fetch(`https://college-booker-server-zeta.vercel.app/getByName/${searchName}`)
          .then((res) => res.json())
          .then((data) => {
            setColleges(data);
          });
      };

    return (
        <div className="relative bg-gradient-to-r from-rose-100 to-blue-100 h-48 md:h-80">
            <img src={shape} className='absolute left-6 top-1/4 w-20 md:w-40' alt="shape" />
            <div className='flex items-center justify-center h-full'>
                <div className='text-center'>

                    <div onClick={handleSearch} className="form-control">
                        <div className="input-group">
                            <input onChange={(e) => setSearchName(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square btn-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <img src={shape} className='absolute right-6 top-1/4 w-20 md:w-40' alt="shape" />
        </div>
    );
};

export default HomeBanner;