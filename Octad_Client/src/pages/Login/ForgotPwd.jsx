import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const ForgotPwd = () => {
    const {pwdChange} = useContext(AuthContext);

    const handlePwdReset = event => {
        event.preventDefault();
        const form = event.target;
        const mail = form.email.value;
        pwdChange(mail)
        .then(result => {
            const msg = result;
            console.log(msg);
            form.reset();
        })
    }

    return (
        <>
            <div className="hero-content flex lg:justify-between pl-0 h-auto">
                <div className="lg:w-1/2">
                    <img src="login_img.png" alt="Login" className="w-full h-auto mb-4 pb-4" />
                </div>
                <div className="w-full max-w-sm">
                    <h1 className="text-5xl mb-5">Reset Password</h1>
                    <p className='mb-10'>Enter your email below to reset your password</p>
                    <form onSubmit={handlePwdReset}>
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
                        <div className="my-5">
                            <div className="submit-btn">
                                <button type='submit' className="btn bg-slate-950 text-white hover:bg-black">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
        </>
    );
};

export default ForgotPwd;