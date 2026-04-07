import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import SocialLogin from './SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in social', location);

    const handleRegister = (data) => {

        console.log("After Submit", data.photo[0]);
        const profileImg = data.photo[0];

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                const formData = new FormData();
                formData.append('image', profileImg);
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`

                axios.post(image_API_URL, formData)
                    .then(res => {
                        console.log('After image Upload', res.data.data.url);
                        navigate(location?.state || '/');

                        // Update userprofile
                        const userprofile = {
                            displayName: data.name,
                            photoUrl: res.data.data.url
                        }
                        updateUserProfile(userprofile)
                            .then(() => {
                                console.log('User Profile updated')
                            })
                            .catch(error => console.log(error))

                    })

            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl mt-3">
            <div className="card-body">
                <h1 className="font-bold text-4xl ">Create an Account</h1>
                <p className="text-secondary font-bold">Register with ZapShift</p>

                <form onSubmit={handleSubmit(handleRegister)} className="fieldset">

                    {/* Name Field */}
                    <label className="label">Name</label>
                    <input
                        type="name"
                        {...register("name", { required: "Name is required" })}
                        className="input"
                        placeholder="Your Name"
                    />
                    {/* Photo image Field */}
                    <label className="label">Name</label>
                    <input
                        type="file"
                        {...register("photo")}
                        className="file-input"
                        placeholder=" Upload Your Image"
                    />
                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        className="input"
                        placeholder="Email"
                    />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    {/* Password */}
                    <label className="label">Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                                message: "Password must include uppercase, lowercase, number & symbol"
                            }
                        })}
                        className="input"
                        placeholder="Password"
                    />

                    {/* Error Messages */}
                    {errors.password && (
                        <p className="text-red-500">{errors.password.message}</p>
                    )}

                    <div>
                        <a className="underline cursor-pointer">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn bg-primary mt-4 text-black">
                        Register
                    </button>
                </form>

                <p className="text-secondary pt-3">
                    I already have an account.
                    <Link to="/login" className="text-primary ml-1 underline">Login</Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Register;
