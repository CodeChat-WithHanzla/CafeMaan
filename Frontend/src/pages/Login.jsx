import React, { useState } from 'react';
import { Input, PasswordInputs, FormButton } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'flowbite-react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData, setIsLoggedIn } from '../slice/UserSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Email and Password are required');
            setShowModal(true);
            return;
        }
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
                email,
                password,
            });
            const { user } = response.data;
            dispatch(setUserData(user));
            dispatch(setIsLoggedIn(true));

            setEmail('');
            setPassword('');
            navigate('/');
        } catch (error) {
            setError(`There was an error while Login!`);
            setShowModal(true);
        }

    };

    return (
        <div className="flex min-h-screen w-screen">

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
                        <p className="lg:text-[14px] text-[14px] text-[#FCB116] font-normal leading-6 text-right cursor-pointer mt-7 sm:mb-8 absolute right-2 top-52">
                            Forgot password?
                        </p>
                         <div className='p-2'>
                         </div>
                        <div className='w-full flex justify-center items-center'>
                            <FormButton text='SIGN IN' />
                        </div>

                        <p className="lg:text-[16px] text-[16px] text-center text-[rgb(255,247,232)] font-semibold leading-normal mt-8 sm:mt-6 md:font-bold">
                            Don’t have an account? <Link to='/sign-up'><span className="text-[#FCB116] cursor-pointer" onClick={() => { navigate('/sign-up') }}>Sign Up</span></Link>
                        </p>
                    </form>
                    <Modal show={showModal} onClose={() => setShowModal(false)}>
                        <Modal.Header>Error</Modal.Header>
                        <Modal.Body>
                            <p>{error}</p>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>

        </div>
    );
};

export default Login;
