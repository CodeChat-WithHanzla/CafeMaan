import React, { useState } from 'react';
import { Input, PasswordInputs, FormButton } from '../components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify";
const Adminlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Email and Password Required")
            return;
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/login`, {
                email,
                password,
            });
            const { token } = data;
            localStorage.setItem('token', token)

            setEmail('');
            setPassword('');
            navigate('/dashboard');
        } catch (error) {
            toast.error("Check your Email and Password")
        }

    };

    return (
        <div className="flex min-h-screen w-screen">
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
                        <div className='p-2'>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <FormButton text='SIGN IN' />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Adminlogin;
