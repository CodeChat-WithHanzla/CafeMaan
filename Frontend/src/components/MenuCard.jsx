import React from 'react';
import { AddToCartButton } from './index';

function MenuCard({ DealHeading, DealText, Price, imageUrl = 'https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2FANY-2-DEAL.webp&w=1080&q=75' }) {
    return (
        <div className="bg-[#171717] w-72 h-96 rounded-xl shadow-lg p-4 flex flex-col justify-between">

            <img
                src={imageUrl}
                alt={DealHeading}
                className="w-full h-48 object-cover rounded-xl mb-4"
            />


            <h3 className="text-[#FCB116] text-xl font-semibold">{DealHeading}</h3>


            <p className="text-white text-sm mt-2">{DealText}</p>


            <div className="mt-4 flex justify-center items-center mb-3">
                <span className="text-[#FCB116] text-2xl font-bold">{Price}</span>
            </div>


            <AddToCartButton />
        </div>
    );
}

export default MenuCard;
