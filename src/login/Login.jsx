import { useForm } from "react-hook-form";
import BannerSection from "../pages/shared/BannerSection";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Login = () => {
    const { login } = useAuth();
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setError('');

        login(data.email, data.password)
            .then(() => {
                reset();
                navigate(from, { replace: true });
                toast.success('Login successfully!')
            })
            .catch(error => setError(error.message))
    }

    return (
        <>
            <BannerSection>Sign Up</BannerSection>
            <section className="px-6 md:px-24 lg:px-8 pb-12 lg:pb-20 bg-gradient-to-r from-rose-100 to-blue-100">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-7 lg:w-3/6 mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email <span className="text-red-600">*</span></span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your email"
                            {...register("email", { required: true })}
                            className="input input-bordered input-accent"
                        />
                        {errors.email && (<small className="text-red-600">Email field is required</small>)}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password <span className="text-red-600">*</span></span>
                        </label>
                        <input
                            type="password"
                            placeholder="Your password"
                            {...register("password", {
                                required: true,
                            })}
                            className="input input-bordered input-accent mb-1"
                        />
                    </div>
                    {errors.password?.type === "required" && (
                        <small className="text-red-600">
                            Password field is required
                        </small>
                    )}
                    {error && <p className='text-red-600 pb-2'><small>{error}</small></p>}

                    <div className="form-control">
                        <input type="submit" value="Login" className="my-btn" />
                    </div>
                    <p className="lg:text-[18px] text-center text-gray-700 pt-4 lg:pt-8">To New College Booker? {" "}
                        <Link to="/signUp" className="font-semibold">
                            <span className="text-black">Sign Up</span>
                        </Link>
                    </p>
                </form>
            </section>
        </>
    );
};

export default Login;