import BannerSection from "../pages/shared/BannerSection";

const MyColleges = () => {
    return (
        <>
            <BannerSection>My Colleges</BannerSection>
            <section className="my-container">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-[#003a70] text-white">
                            <tr>
                                <th>College image</th>
                                <th>College name</th>
                                <th>Subject</th>
                                <th>Review & Feedback</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {colleges?.map(( college,) => (
                                <tr key={college._id} className="border-b-2">
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-16">
                                                    <img src={college.college_image} alt="Name" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{college.college_name}</td>
                                    <td>${college.subject}</td>
                                    <td className="my-btn">Apply</td>
                                </tr>
                            ))}
                        </tbody> */}
                    </table>
                </div>
            </section>
        </>
    );
};

export default MyColleges;