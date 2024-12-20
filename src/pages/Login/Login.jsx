import React, { useContext } from 'react';
import "./Login.css";
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const {user, userSignIn, googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const mail = form.email.value;
        const password = form.pwd.value;
        userSignIn(mail, password)
        .then(result => {
            const user = result.user;
            navigate("/");
        }); 
    }

    const googleSignIn = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    }

    return (
        <>
            <div className="hero-content flex lg:justify-between pl-0 h-auto">
                <div className="lg:w-1/2">
                    <img src="login_img.png" alt="Login" className="w-full h-auto mb-4 pb-4" />
                </div>
                <div className="w-full max-w-sm">
                    <h1 className="text-5xl mb-5">Log in to Octad</h1>
                    <p className='mb-10'>Enter your credentials below</p>
                    <form onSubmit={handleSignIn}>
                        <div className="form-control mb-5">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" name='email' placeholder="Email" />
                        </label>
                        </div>
                        <div className="form-control mb-5">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                            </svg>
                            <input type="password" name='pwd' className="grow" placeholder="password" />
                        </label>
                        </div>
                        <div className="flex justify-between my-5">
                            <div className="submit-btn">
                                <button type='submit' className="btn bg-slate-950 text-white hover:bg-black">Login</button>
                            </div>
                            <div className="flex items-center forgot-link">
                                <Link to={"/reset-password"} className="text-lg underline">Forgot Password?</Link>
                            </div>
                        </div>
                    </form>
                    <div className="form-control my-5">
                        <button onClick={googleSignIn} className="btn google-login-btn hover">Login With Google</button>
                    </div>
                    <div className="signup-link">
                        <p className="text-lg">Already have a account? <Link to={"/signup"} className='underline'>Click here!</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;