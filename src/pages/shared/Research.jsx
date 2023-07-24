
const Research = ({ research_work }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {
                research_work?.map((research, idx) => <div key={idx} className="card card-compact border border-inherit">
                    <figure><img className="h-[200px] w-full p-4 rounded-lg" src={research?.img} alt="class" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-gray-700">{research.name}</h2>
                        <div className="">
                            <p className="my-2 text-[16px] text-gray-600">{research.desc}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Research;