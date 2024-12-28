import React from 'react'
import 'remixicon/fonts/remixicon.css';

function FooterSignature() {
    return (
        <div className='text-white'>
            <img
                className="mx-auto mb-4"
                src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=128&q=75"
                alt="Logo"
            />
            <p className='text-2xl font-bold mb-2'>Follow Us</p>
            <div className="flex justify-center gap-4">
                <h5><i className="ri-facebook-fill"></i></h5>
                <h5><i className="ri-instagram-line"></i></h5>
            </div>
        </div>
    )
}

export default FooterSignature
