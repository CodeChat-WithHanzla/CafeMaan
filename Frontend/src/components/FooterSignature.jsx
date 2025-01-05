import React from 'react';
import 'remixicon/fonts/remixicon.css';

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
                    <h5>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                        >
                            <i className="ri-facebook-fill text-3xl"></i>
                        </a>
                    </h5>

                    <h5>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:scale-110 transition-all duration-300"
                        >
                            <i className="ri-instagram-line text-3xl"></i>
                        </a>
                    </h5>
                    <h5>
                        <a
                            href="https://tiktok.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-black text-white hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
                        >
                            <i className="ri-tiktok-line text-3xl"></i>
                        </a>
                    </h5>
                </div>
            </div>

            <div className="flex gap-4 mt-4">
                <a href="https://rancherscafe.com/_next/static/media/Mobile-play-store-badge.6fd9e9fa.svg" target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-32 h-auto"
                        src="https://rancherscafe.com/_next/static/media/Mobile-play-store-badge.6fd9e9fa.svg"
                        alt="Play Store"
                    />
                </a>
                <a href="https://rancherscafe.com/_next/static/media/Mobile-app-store-badge.c83f0f3b.svg" target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-32 h-auto"
                        src="https://rancherscafe.com/_next/static/media/Mobile-app-store-badge.c83f0f3b.svg"
                        alt="App Store"
                    />
                </a>
            </div>
        </div>
    );
}

export default FooterSignature;