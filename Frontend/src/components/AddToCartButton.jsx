import React from 'react';

function AddToCartButton({ handleCLick }) {
    return (
        <div className="w-full flex justify-center items-center">
            <button
                onClick={handleCLick}
                className="text-xl w-full px-2 py-1 text-white bg-[#b3202a] hover:text-black rounded-lg shadow-lg hover:bg-[#FCB116] focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform duration-300 transform hover:scale-105 active:scale-95"
            >
                ADD TO CART
            </button>
        </div>
    );
}

export default AddToCartButton;
