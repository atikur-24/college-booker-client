import { HiOutlineChevronRight } from 'react-icons/hi';
import shape from '../../assets/images/others/shape.png';
import { Link } from 'react-router-dom';

const BannerSection = ({ children }) => {
    return (
        <div className="relative bg-gradient-to-r from-rose-100 to-blue-100 h-52 md:h-96">
            <img src={shape} className='absolute left-6 top-1/4 w-20 md:w-40' alt="shape" />
            <div className='flex items-center justify-center h-full'>
                <div className='text-center'>
                    <h2 className='text-2xl md:text-[42px] pb-2 md:pb-4 font-bold tracking-wide title-color'>{children}</h2>
                    <p className='inline-flex items-center gap-1 font-medium md:font-semibold text-sm'><Link to='/' className='hover:text-teal-500 cursor-pointer transition-colors'>Home</Link> <HiOutlineChevronRight /> {children}</p>
                </div>
            </div>
            <img src={shape} className='absolute right-6 top-1/4 w-20 md:w-40' alt="shape" />
        </div>
    );
};

export default BannerSection;   