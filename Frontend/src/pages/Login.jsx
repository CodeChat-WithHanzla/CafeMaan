import React, { useState } from 'react';
import { Input, PasswordInputs, FormButton } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData, setIsLoggedIn } from '../slice/UserSlice';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Email and Password are required');
            return;
        }
        try {
            setLoading(true)
            const { status, data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
                email,
                password,
            });
            if (status === 200) {
                const { user, token } = data;
                dispatch(setUserData(user));
                localStorage.setItem("token", token);
                dispatch(setIsLoggedIn(true));
            }


            setEmail('');
            setPassword('');
            navigate('/');
        } catch (error) {
            toast.error("Check your Email and Password")
        }
        finally {
            setLoading(false)
        }

    };

    return (
        <div className="flex h-screen w-screen">
            <ToastContainer />
            <img className="object-cover w-full md:w-1/2 hidden md:block" src="https://res.cloudinary.com/dwlbprnr5/image/upload/v1735564600/signin_pic.13b93085_lf3gjk.webp" alt="Sign In" />

            <div className="bg-[url(https://res.cloudinary.com/dwlbprnr5/image/upload/v1735564436/loginImg_hzrmyx.webp)] bg-cover bg-center min-h-screen w-full md:w-1/2 pb-5">
                <div className="p-6 sm:p-10 md:p-20 text-white flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-3 mb-6">
                        <h3 className="font-bold text-3xl sm:text-2xl md:text-3xl">LOGIN to <span className="text-[#FCB116]">CafeMaan</span></h3>
                        <p className="text-[#FCB116] text-[20px] sm:text-[18px] font-serif">Good Fellas Eat Here!</p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full mt-5 flex flex-col items-center justify-center space-y-6 relative">
                        <Input value={email} setValue={setEmail} label="Enter Email" placeholder="Email" type='email' autoComplete='email' />
                        <PasswordInputs label='Enter Password' value={password} setValue={setPassword} autoComplete="current-password" />
                        <div className='w-full flex justify-center items-center'>
                            <FormButton text='SIGN IN' isLoading={loading} />
                        </div>

                        <p className="lg:text-[16px] text-[16px] text-center text-[rgb(255,247,232)] font-semibold leading-normal mt-8 sm:mt-6 md:font-bold">
                            Don’t have an account? <Link to='/sign-up'><span className="text-[#FCB116] cursor-pointer" onClick={() => { navigate('/sign-up') }}>Sign Up</span></Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
