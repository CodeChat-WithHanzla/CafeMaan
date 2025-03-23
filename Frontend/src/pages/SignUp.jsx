import React, { useState } from 'react';
import { Input, PasswordInputs, FormButton } from '../components';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'flowbite-react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData, setIsLoggedIn } from '../slice/UserSlice';
import { toast, ToastContainer } from 'react-toastify';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !phoneNumber || !password || !confirmPassword) {
            toast.error('All fields are required');
            return;
        }
        const phoneRegex = /^03\d{9}$/;
        if (!phoneRegex.test(phoneNumber)) {
            toast.error('Phone number must start with 03 and be followed by 9 digits.');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        try {
            setLoading(true)
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/register`, {
                name,
                email,
                phoneNumber,
                password,
                confirmPassword,
            });
            const { user, token } = response.data;
            dispatch(setUserData(user));
            localStorage.setItem("token", token);
            dispatch(setIsLoggedIn(true));

            setName('');
            setEmail('');
            setPhoneNumber('');
            setPassword('');
            setConfirmPassword('');
            navigate('/');

        } catch (error) {
            toast.error(`There was an error registering! ${error.message}`);
        }
        finally {
            setLoading(false)
        }
        // setName('')
        // setEmail('')
        // setPhoneNumber('')
        // setPassword('')
        // setConfirmPassword('')
    };

    return (
        <div className="flex min-h-screen w-screen">
            <ToastContainer />
            <img className="object-cover w-full md:w-1/2 hidden md:block" src="https://res.cloudinary.com/dwlbprnr5/image/upload/v1735564600/signin_pic.13b93085_lf3gjk.webp" alt="Sign In" />

            <div className="bg-[url(https://res.cloudinary.com/dwlbprnr5/image/upload/v1735564436/loginImg_hzrmyx.webp)] bg-cover bg-center min-h-screen w-full md:w-1/2 pb-5">
                <div className="p-6 sm:p-10 md:p-20 text-white flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-3 mb-6">
                        <h3 className="font-bold text-3xl sm:text-2xl md:text-3xl">SIGNUP to <span className="text-[#FCB116]">CafeMaan</span></h3>
                        <p className="text-[#FCB116] text-[20px] sm:text-[18px] font-serif">Good Fellas Eat Here!</p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full mt-5 flex flex-col items-center justify-center space-y-6 pr-5">
                        <Input value={name} setValue={setName} label="Enter Name" placeholder="Name" type='text' autoComplete='given-name' />
                        <Input value={email} setValue={setEmail} label="Enter Email" placeholder="Email" type='email' autoComplete='email' />
                        <Input value={phoneNumber} setValue={setPhoneNumber} label="Enter Phone Number (e.g 0321.......)" placeholder="Phone Number" type='tel' autoComplete='tel' />
                        <PasswordInputs label='Enter Password' value={password} setValue={setPassword} autocomplete="new-password" />
                        <PasswordInputs label='Confirm Password' value={confirmPassword} setValue={setConfirmPassword} autoComplete="new-password" />
                        <FormButton text='SIGN UP' isLoading={loading} />
                        <p className="lg:text-[16px] text-[16px] text-center text-[rgb(255,247,232)] font-semibold leading-normal mt-8 sm:mt-6 md:font-bold">
                            Already have an account? <span className="text-[#FCB116] cursor-pointer" onClick={() => navigate('/login')}>Sign In</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
