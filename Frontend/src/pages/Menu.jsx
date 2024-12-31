import React from 'react'
import { MenuItems,AddToCart } from '../components'
import { useSelector } from 'react-redux';
function Menu() {
    const selectedItem = useSelector(state => state.selectedItem)
    return (
        <div className="bg-[#121212] w-screen min-h-screen flex flex-col">
            <div className="bg-[#121212] flex-grow mt-20">
                <MenuItems item={'Deal'} />
                <MenuItems item={'Deal'} />
                <MenuItems item={'Deal'} />
            </div>
            {selectedItem && <AddToCart DealHeading={selectedItem.DealHeading} DealText={selectedItem.DealText} Price={selectedItem.Price} imageUrl={selectedItem.imageUrl} rating={selectedItem.rating} category={selectedItem.category} />}
        </div>
    )
}

export default Menu