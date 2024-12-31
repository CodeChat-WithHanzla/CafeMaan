import { useState } from 'react'
import { Input, FormButton } from '../components';
function ForgetPassword() {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);

        setEmail('')
        setPassword('')
    };
    return (
        <div className="flex min-h-screen w-screen">

            <img className="object-cover w-full md:w-1/2 hidden md:block" src="https://res.cloudinary.com/dwlbprnr5/image/upload/v1735564600/signin_pic.13b93085_lf3gjk.webp" alt="Sign In" />

            <div className="bg-[url(https://res.cloudinary.com/dwlbprnr5/image/upload/v1735564436/loginImg_hzrmyx.webp)] bg-cover bg-center min-h-screen w-full md:w-1/2 pb-5">
                <div className="p-6 sm:p-10 md:p-20 text-white flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-3 mb-6">
                        <h3 className="font-bold text-3xl sm:text-2xl md:text-3xl">FORGET <span className="text-[#FCB116]">Password?</span></h3>
                        <p className="text-[#FCB116] text-[20px] sm:text-[18px] font-serif">Good Fellas Eat Here!</p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full mt-5 flex flex-col items-center justify-center space-y-6">
                        <Input value={email} setValue={setEmail} label="Enter Email" placeholder="Email" type='email' autoComplete='email' />
                        <FormButton text='Continue' />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ForgetPassword