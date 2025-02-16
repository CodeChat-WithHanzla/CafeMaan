import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { Footer } from "../assets/cafemaan/index.js"
function FooterSignature() {
    return (
        <div className='text-white flex items-center justify-center flex-col'>
            <img
                className="mx-auto mb-4 w-32 h-32 object-contain transition-all duration-300 hover:scale-105"
                src="https://res.cloudinary.com/dwlbprnr5/image/upload/v1735671465/Asset_4_ucj8qd.png"
                alt="Logo"
            />
            <div className="w-full h-[2px] bg-[#FCB116] mb-4"></div>

            <div className="flex flex-col items-center">
                <p className='text-2xl font-bold mb-2'>Follow Us</p>
                <div className="flex justify-center gap-4 my-3">

                    <div className="bg-[#FCB116] rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <i className="ri-facebook-fill text-3xl text-white cursor-pointer"></i>
                    </div>


                    <div className="bg-[#FCB116] rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <i className="ri-instagram-line text-3xl text-white cursor-pointer"></i>
                    </div>


                    <div className="bg-[#FCB116] rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <i className="ri-tiktok-line text-3xl text-white cursor-pointer"></i>
                    </div>
                </div>

            </div>

            <div className="flex gap-4 mt-4">
                {
                    Footer.map((item, index) => (
                        <img
                            key={index}
                            className="w-32 h-auto"
                            src={item}
                            alt={item}
                        />
                    ))
                }


            </div>
        </div>
    );
}

export default FooterSignature;