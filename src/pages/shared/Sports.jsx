import { HiCheck } from "react-icons/hi";

const Sports = ({ sportInfo }) => {
    return (
        <div className="hero">
        <div className="z-0 flex max-w-7xl flex-col lg:flex-row gap-5 lg:gap-8">
            <img src={sportInfo[1]} className="lg:max-w-md rounded-lg" />
            <div>
                <h1 className="text-2xl tracking-wide font-bold capitalize">{sportInfo[0]}</h1>
                <p className="py-6 text-gray-600">{sportInfo[2]}</p>
                <div className="text-gray-600">
                <p className="flex items-center gap-1"><HiCheck className="text-teal-500" /> Facilities 1: Football</p>
                <p className="flex items-center gap-1"><HiCheck className="text-teal-500" /> Facilities 2: Cricket</p>
                <p className="flex items-center gap-1"><HiCheck className="text-teal-500" /> Facilities 3: Badminton</p>
                <p className="flex items-center gap-1"><HiCheck className="text-teal-500" /> Facilities 4: Race</p>
                <p className="flex items-center gap-1"><HiCheck className="text-teal-500" /> Facilities 5: Indore GYM</p>
                <p className="flex items-center gap-1"><HiCheck className="text-teal-500" /> Facilities 6: Swimming</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Sports;