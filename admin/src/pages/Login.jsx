import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from '../context/AdminContext';
import Input from '../components/Input';
import PasswordInputs from '../components/PasswordInputs';
import FormButton from '../components/FormButton';
const Login = () => {
    const { BackendUrl, setAToken } = useContext(AdminContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Email and Password are required!");
            return;
        }
        setLoading(true)
        try {
            const { data } = await axios.post(`${BackendUrl}/admin/login`, { email, password });
            const { aToken } = data;

            if (aToken) {
                localStorage.setItem('aToken', aToken);
                setAToken(aToken);
                toast.success("Login successful!");
                navigate('/dashboard');
            } else {
                toast.error("Invalid login response!");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Check your Email and Password!");
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <div className="flex min-h-screen w-screen">
            <ToastContainer />
            <img className="object-cover w-full md:w-1/2 hidden md:block"
                src="https://res.cloudinary.com/dwlbprnr5/image/upload/v1735564600/signin_pic.13b93085_lf3gjk.webp"
                alt="Sign In"
            />
            <div className="bg-[url(https://res.cloudinary.com/dwlbprnr5/image/upload/v1735564436/loginImg_hzrmyx.webp)] bg-cover bg-center min-h-screen w-full md:w-1/2 pb-5">
                <div className="p-6 sm:p-10 md:p-20 text-white flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-3 mb-6">
                        <h3 className="font-bold text-3xl sm:text-2xl md:text-3xl">
                            LOGIN As Admin to <span className="text-[#FCB116]">CafeMaan</span>
                        </h3>
                        <p className="text-[#FCB116] text-[20px] sm:text-[18px] font-serif">
                            Good Fellas Eat Here!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full mt-5 flex flex-col items-center justify-center space-y-6">
                        <Input value={email} setValue={setEmail} label="Enter Email" placeholder="Email" type="email" autoComplete="email" />
                        <PasswordInputs label="Enter Password" value={password} setValue={setPassword} autoComplete="current-password" />

                        <div className='w-full flex justify-center items-center'>
                            <FormButton text="SIGN IN" isLoading={loading} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
