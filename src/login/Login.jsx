import { useForm } from "react-hook-form";
import BannerSection from "../pages/shared/BannerSection";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import googleLogo from '../assets/images/signIn/google.png';
import twitterLogo from '../assets/images/signIn/twitter.png';

const Login = () => {
    const { login, googleSignIn, twitterSignIn, forgotPassword } = useAuth();
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setError('');

        login(data.email, data.password)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset();
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }

    const handleTwitterSignIn = () => {
        twitterSignIn()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    // handle forget password
    const handleForgotPassword = () => {
        const email = watch("email");
        if (!email) {
            return Swal.fire({
                title: 'Warning!',
                text: 'Please provide valid email address',
                icon: 'warning',
                showConfirmButton: false,
                timer: 1500
            })
        }
        forgotPassword(email)
            .then(() => {
                Swal.fire({
                    title: 'Password Reset Successfully!',
                    text: 'Please check your email address',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <>
            <BannerSection>Login</BannerSection>
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
                        <label className="label">
                            <p onClick={handleForgotPassword} className="label-text-alt link link-hover">Reset password?</p>
                        </label>
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
                </form>
                <div className="lg:w-3/6 mx-auto">
                    <div className="divider my-8 md:my-10 font-medium">Or Sign in with</div>
                    <div className="flex items-center justify-between">
                        <button onClick={handleTwitterSignIn} className="btn md:w-56"> <img src={twitterLogo} alt="twitter" /> Twitter </button>
                        <button onClick={handleGoogleSignIn} className="btn md:w-56"> <img src={googleLogo} alt="google" /> Google </button>
                    </div>
                </div>
                <p className="lg:text-[18px] text-center text-gray-700 pt-4 lg:pt-8">To New College Booker? {" "}
                    <Link to="/signUp" className="font-semibold">
                        <span className="text-black">Sign Up</span>
                    </Link>
                </p>
            </section>
        </>
    );
};

export default Login;