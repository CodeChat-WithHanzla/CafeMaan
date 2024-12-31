import React from 'react'
import 'remixicon/fonts/remixicon.css';

function FooterSignature() {
    return (
        <div className='text-white'>
            <img
                className="mx-auto mb-4 w-32 h-32 object-contain"
                src="https://res.cloudinary.com/dwlbprnr5/image/upload/v1735671465/Asset_4_ucj8qd.png"
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
