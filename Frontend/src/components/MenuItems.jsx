import React from 'react'
import { MenuCard } from './index'
import { deals } from '../assets/cafemaan';

function MenuItems({ item, setShowCart }) {
    const menuItemsDesc = deals.filter(deal => deal.category === item) || []
    
    return (
        <div className="w-screen text-white pt-3">
            <div className='ml-10 font-bold text-3xl mb-4'>{item}</div>
            <div className="flex justify-center items-center flex-wrap gap-5 mb-20">
                {
                    menuItemsDesc.map((item, index) => (< MenuCard setShowCart={setShowCart} key={index} DealHeading={item.DealHeading} DealText={item.DealText} Price={item.Price} imageUrl={item.imageUrl} rating={item.rating} category={item.category} />))
                }
            </div>
        </div>
    )
}

export default MenuItems