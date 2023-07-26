import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const CandidateInfo = () => {
    const { user } = useAuth();
    const college = useLoaderData();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const image_hosting_url = `https://api.imgbb.com/1/upload?&key=${image_hosting_token}`;

    const onSubmit = (data) => {
        data["college_name"] = college.college_name;
        data["college_image"] = college.college_image;
        data["email"] = user?.email;

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    data["image"] = imgURL;
                    fetch('http://localhost:5000/candidatesInfo', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Submit Successful!',
                                showConfirmButton: false,
                                timer: 1500
                              })
                              reset();
                        }         
                    })
                }
        })
    }

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-base-200 rounded-lg p-20 md:p-24">
                <h2 className="text-start md:text-center text-xl md:text-2xl font-semibold">Please fill up  carefully</h2>
                <div className="space-y-5">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Candidate Name <span className="text-red-600">*</span></span>
                        </label>
                        <input {...register("candidate_name", { required: true })} type="text" placeholder="Enter your name" className="input input-bordered input-accent  " />
                        {errors.candidate_name && <span className="text-red-600" >Candidate name field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Candidate Email <span className="text-red-600">*</span></span>
                        </label>
                        <input {...register("candidate_email", { required: true })} type="email" placeholder="Enter your email" className="input input-bordered input-accent " />
                        {errors.candidate_email && <span className="text-red-600" >Candidate Email field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Upload Your Image <span className="text-red-600">*</span></span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-accent w-full" />
                        {errors.image && <span className="text-red-600" >Image field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Select Subject <span className="text-red-600">*</span></span>
                        </label>
                        <select defaultValue="Select a Subject" {...register("subject", { required: true })} className="input input-bordered input-accent" >
                            <option disabled>Select a Subject</option>
                            <option value="Computer Science and Engineering - CSE">Computer Science and Engineering - CSE</option>
                            <option value="Electrical and Electronics Engineering - EEE">Electrical and Electronics Engineering - EEE</option>
                            <option value="Bachelor of Business Administration - BBA">Bachelor of Business Administration - BBA</option>
                            <option value="Economics - BSS">Economics - BSS</option>
                            <option value="Sociology - BSS">Sociology - BSS</option>
                            <option value="English - BA">English - BA</option>
                            <option value="Bangla - BA">Bangla - BA</option>
                        </select>
                        {errors.subject && <span className="text-red-600" >Subject field is required</span>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Date of Birth<span className="text-red-600">*</span></span>
                            </label>
                            <input {...register("dob", { required: true })} type="date" className="input input-bordered input-accent" />
                            {errors.dob && <span className="text-red-600" >Date of birth field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Phone Number <span className="text-red-600">*</span></span>
                            </label>
                            <input {...register("phone_number", { required: true })} type="number" placeholder="Enter your phone number" className="input input-bordered input-accent" />
                            {errors.phone_number && <span className="text-red-600" >Phone number field is required</span>}
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Address <span className="text-red-600">*</span></span>
                        </label>
                        <input {...register("address", { required: true })} type="text" placeholder="Enter your address" className="input input-bordered input-accent" />
                        {errors.address && <span className="text-red-600" >Address field is required</span>}
                    </div>
                </div>
                {/* <div className="flex justify-center gap-2">
                    {loading && <><span>Please Wait</span><span className="loading loading-dots loading-sm mt-2"></span></>}
                </div> */}
                <div className="form-control mt-6">
                    <input className="my-btn" type="submit" value="Submit" />
                </div>
            </form>
        </section>
    );
};

export default CandidateInfo;