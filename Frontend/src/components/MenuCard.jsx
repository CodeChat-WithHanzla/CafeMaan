import React from 'react';
import { AddToCartButton } from './index';
import { useDispatch, } from "react-redux"
import { setSelectedItem } from "../slice/SelectedSlice"
function MenuCard({ setShowCart, DealHeading, DealText, Price, imageUrl, rating, category }) {

    const dispatch = useDispatch();
    const handleSelectedItem = () => {
        dispatch(setSelectedItem({ DealHeading, DealText, Price, imageUrl, rating, category }));
        setShowCart(true)
    }
    return (
        <div className="bg-[#171717] w-72 h-96 rounded-xl shadow-lg p-4 flex flex-col justify-between transition-transform duration-300 transform hover:scale-110">

            <img
                src={imageUrl}
                alt={DealHeading}
                className="w-full h-48 object-cover rounded-xl mb-4 overflow-hidden"
            />


            <h3 className="text-[#FCB116] text-xl font-semibold">{DealHeading}</h3>


            <p className="text-white text-sm mt-2">{DealText}</p>


            <div className="mt-4 flex justify-center items-center mb-3">
                <span className="text-[#FCB116] text-2xl font-bold">Rs. {Price}</span>
            </div>


            <AddToCartButton handleCLick={handleSelectedItem} />
        </div>
    );
}

export default MenuCard;
