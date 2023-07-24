
const Events = ({ eventInfo }) => {
    return (
        <div className="hero">
            <div className="z-0 flex max-w-7xl flex-col lg:flex-row gap-5 lg:gap-8">
                <img src={eventInfo[1]} className="lg:max-w-md rounded-lg" />
                <div>
                    <h1 className="text-2xl tracking-wide font-bold capitalize">{eventInfo[0]}</h1>
                    <p className="py-6 text-justify lg:leading-7 text-gray-600">{eventInfo[2]}</p>
                </div>
            </div>
        </div>

    );
};

export default Events;