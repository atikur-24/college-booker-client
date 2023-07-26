import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";

const Profile = () => {
    const { user } = useAuth();
    const [colleges, setColleges] = useState([]);

    const { candidate_name, candidate_email, address, college_name } = colleges[0] || {};

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch(`http://localhost:5000/candidatesInfo/${user?.email}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0) {
                  Swal.fire({
                      title: 'Success!',
                      text: 'Profile Updated successfully!',
                      icon: 'success',
                      confirmButtonText: 'Ok'
                    })
              }
              
            })
    }


    useEffect(() => {
        fetch(`http://localhost:5000/candidatesInfo/${user?.email}`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [user])

    return (
        <section className="">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-gradient-to-r from-rose-100 to-blue-100rounded-lg p-20 md:py-24 md:px-40 lg:px-80">
                <h2 className="text-start md:text-center text-xl md:text-2xl font-semibold">Edit Your Profile</h2>
                <div className="space-y-5">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Candidate Name</span>
                        </label>
                        <input defaultValue={candidate_name} {...register("candidate_name", { required: true })} type="text" placeholder="Enter your name" className="input input-bordered input-accent  " />
                        {errors.candidate_name && <span className="text-red-600" >Candidate name field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Candidate Email</span>
                        </label>
                        <input defaultValue={candidate_email} {...register("candidate_email", { required: true })} type="email" placeholder="Enter your email" className="input input-bordered input-accent " />
                        {errors.candidate_email && <span className="text-red-600" >Candidate Email field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">College Name</span>
                        </label>
                        <input defaultValue={college_name} {...register("college_name", { required: true })} type="text" placeholder="Enter your address" className="input input-bordered input-accent" />
                        {errors.college_name && <span className="text-red-600" >Address field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Address</span>
                        </label>
                        <input defaultValue={address} {...register("address", { required: true })} type="text" placeholder="Enter your address" className="input input-bordered input-accent" />
                        {errors.address && <span className="text-red-600" >Address field is required</span>}
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="my-btn" type="submit" value="Update Profile" />
                </div>
            </form>
        </section>
    );
};

export default Profile;