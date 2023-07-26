import { useState } from "react";
import BannerSection from "../pages/shared/BannerSection";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";
import DynamicTitle from "../components/DynamicTitle";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const SignUp = () => {
    const { signUp, updateUserProfile } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const image_hosting_url = `https://api.imgbb.com/1/upload?&key=${image_hosting_token}`;

    const onSubmit = (data) => {
        setPasswordMatchError("");
        if (data.password !== data.confirm) {
            return setPasswordMatchError('password do not match');
        }
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
                    data["image"] = imgURL
                }
            })

        // signUp with email & password and update user profile
        signUp(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.image);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Account has been created successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset();
                navigate('/');
            })
            .catch(error => {
                const message = error.message;
                Swal.fire({
                    title: "Error!",
                    text: message,
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            })
        console.log(data);
    }

    return (
        <>
            <DynamicTitle>Sign Up</DynamicTitle>
            <BannerSection>Sign Up</BannerSection>
            <section className="px-6 md:px-24 lg:px-8 pb-12 lg:pb-20 bg-gradient-to-r from-rose-100 to-blue-100">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-7 lg:w-3/6 mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name <span className="text-red-600">*</span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            {...register("name", { required: true })}
                            className="input input-bordered input-accent mb-1"
                        />
                        {errors.name && (<small className="text-red-600">Name field is required</small>)}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email <span className="text-red-600">*</span></span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your email"
                            {...register("email", { required: true })}
                            className="input input-bordered input-accent mb-1"
                        />
                        {errors.email && (<small className="text-red-600">Email field is required</small>)}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo <span className="text-red-600">*</span></span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-accent w-full" />
                        {errors.image && <span className="text-red-600" >Image field is required</span>}
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold">Password <span className="text-red-600">*</span></span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Your password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20
                            })}
                            className="input input-bordered input-accent mb-1"
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-[63%] right-4 cursor-pointer">
                            {showPassword ? <HiEyeOff /> : <HiEye />}
                        </span>
                    </div>
                    {errors.password?.type === "required" && (
                        <small className="text-red-600">
                            Password field is required
                        </small>
                    )}
                    {errors.password?.type === "minLength" && (
                        <small className="text-red-600">
                            Your password must be at least 6 characters
                        </small>
                    )}
                    {errors.password?.type === "maxLength" && (
                        <small className="text-red-600">
                            Your password must be under 20 characters
                        </small>
                    )}

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold"> Confirm Password <span className="text-red-600">*</span></span>
                        </label>
                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Your Confirm password"
                            {...register("confirm", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                            })}
                            className="input input-bordered input-accent mb-1"
                        />
                        <span
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute top-[63%] right-4 cursor-pointer"
                        >
                            {showConfirm ? <HiEyeOff /> : <HiEye />}
                        </span>
                    </div>
                    {errors.confirm?.type === "required" && (
                        <small className="text-red-600">
                            Confirm password field is required
                        </small>
                    )}
                    {errors.confirm?.type === "minLength" && (
                        <small className="text-red-600">
                            Your confirm password must be at least 6 characters
                        </small>
                    )}
                    {errors.confirm?.type === "maxLength" && (
                        <small className="text-red-600">
                            Your confirm password must be under 20 characters
                        </small>
                    )}
                    {passwordMatchError && <small className="text-red-600">{passwordMatchError}</small>}


                    <div className="form-control">
                        <input type="submit" value="Sign Up" className="my-btn" />
                    </div>
                    <p className="lg:text-[18px] text-center text-gray-700 pt-4 lg:pt-8">Already have an account? {" "}
                        <Link to="/login" className="font-semibold">
                            <span className="text-black">Login</span>
                        </Link>
                    </p>
                </form>
            </section>
        </>
    );
};

export default SignUp;