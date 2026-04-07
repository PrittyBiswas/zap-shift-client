import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';

import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const singInUser = (data) => {
        console.log("After Submit", data);
        registerUser(data.emil, data.password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ||'/');
            })
            .catch(error => {
                console.log(error);
            })
    };
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl mt-15">
            <div className="card-body">
                <h1 className="font-bold text-4xl mb-3">Welcome Back</h1>
                <p className="text-secondary font-bold">Login with ZapShift</p>

                <form onSubmit={handleSubmit(singInUser)} className="fieldset">

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
                        Login
                    </button>
                </form>

                <p 
                state={location.state}
                className="text-secondary pt-3">
                    Don't have any account?
                    <Link to="/register" className="text-primary  underline"> Register</Link>
                </p>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;