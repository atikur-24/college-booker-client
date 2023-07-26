import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import BannerSection from "../pages/shared/BannerSection";
import { Controller, useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { Toaster, toast } from "react-hot-toast";
import Spinner from "../components/Spinner";

const MyColleges = () => {
    const { user } = useAuth();
    const [colleges, setColleges] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/candidatesInfo/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setColleges(data);
                setSpinner(false)
            })
    }, [user])


    const {
        register,
        reset,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            feedback: '',
            rating: 0,
        },
    });

    const onSubmit = (data) => {
        data["name"] = user?.displayName;
        fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success("feedback send successfully")
                  reset();
            }         
        })
    }


    return (
        <>
            <BannerSection>My Colleges</BannerSection>
            <section className="my-container">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-[#2f2a55] text-white">
                            <tr>
                                <th>College image</th>
                                <th>College name</th>
                                <th>Subject</th>
                                <th>Review & Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colleges?.map((college,) => (
                                <tr key={college._id} className="border-b-2">
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask rounded-md w-32 h-40">
                                                    <img src={college.college_image} alt="Name" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-medium text-[16px]">{college.college_name}</td>
                                    <td className="font-medium text-[16px]">{college.subject}</td>

                                    <td>
                                        <form onSubmit={handleSubmit(onSubmit)}>                                         
                                            <textarea type="text" {...register('feedback', { required: true })} placeholder="write feedback" className="textarea textarea-bordered h-28 resize-none textarea-accent" />
                                            <div>
                                                <Controller
                                                    control={control}
                                                    name="rating"
                                                    rules={{
                                                        validate: (rating) => rating > 0,
                                                    }}
                                                    render={({ field: { onChange, onBlur, value } }) => (
                                                        <Rating
                                                            value={value}
                                                            isRequired
                                                            onChange={onChange}
                                                            visibleLabelId="rating_label"
                                                            onBlur={onBlur}
                                                            style={{ maxWidth: 150 }}
                                                        />
                                                    )}
                                                />
                                                {errors.rating && (<small className="text-red-600 font-medium">rating & feedback required</small>)}
                                            </div>
                                            <button className="btn btn-accent btn-md mt-5" type="submit">
                                                Submit review
                                            </button>
                                        </form>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    { spinner && <Spinner /> }
                </div>
                <div>
                </div>
                <Toaster />
            </section>
        </>
    );
};

export default MyColleges;