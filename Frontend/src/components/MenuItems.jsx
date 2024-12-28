import React from 'react'
import { MenuCard } from './index'

function MenuItems({ item = 'Deal' }) {
    const menuItemsDesc = [
        {
            DealHeading: "Any Two Deal",
            DealText: "Any Two Burgers and any 2 drinks",
            Price: "Rs. 1399",
            imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2FANY-2-DEAL.webp&w=1080&q=75"
        },
        {
            DealHeading: "Family Feast",
            DealText: "4 Burgers, 4 Fries, and 4 Drinks",
            Price: "Rs. 2499",
            imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2FANY-2-DEAL.webp&w=1080&q=75"
        },
        {
            DealHeading: "Classic Combo",
            DealText: "1 Burger, Fries, and a Drink",
            Price: "Rs. 799",
            imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2FANY-2-DEAL.webp&w=1080&q=75"
        },
        {
            DealHeading: "Mega Platter",
            DealText: "6 Burgers, 6 Fries, and 6 Drinks",
            Price: "Rs. 3499",
            imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2FANY-2-DEAL.webp&w=1080&q=75"
        }
    ];
    return (
        <div className="w-screen text-white pt-3">
            <div className='ml-10 font-bold text-3xl mb-4'>{item}</div>
            <div className="flex justify-center items-center flex-wrap gap-5 mb-20">
                {
                    menuItemsDesc.map((item, index) => (< MenuCard key={index} DealHeading={item.DealHeading} DealText={item.DealText} Price={item.Price} imageUrl={item.imageUrl} />))
                }
            </div>
        </div>
    )
}

export default MenuItems