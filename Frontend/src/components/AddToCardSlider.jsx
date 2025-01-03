import React from "react";
import { useSelector } from "react-redux";

const AddToCardSlider = ({ isOpen, toggleSlider }) => {
    const items = useSelector(state => state.cart)

    return (
        <div
            className={`fixed top-0 right-0 h-full w-80 bg-[#1f1f1f] shadow-xl transform ${isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-500 ease-in-out border-l border-gray-700 z-50`}
        >
            <div className="p-6 flex flex-col h-full">


                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-yellow-400">Your Cart</h2>
                    <button
                        className="text-yellow-400 hover:text-white text-2xl transition duration-300"
                        onClick={toggleSlider}
                    >
                        ✕
                    </button>
                </div>


                <div className="flex-1 overflow-y-auto">
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <div
                                key={index}
                                className="p-4 mb-4 bg-[#2b2b2b] rounded-lg shadow-md flex items-center justify-between hover:shadow-lg transition duration-300"
                            >
                                <div className="flex flex-col">
                                    <p className="text-sm font-semibold text-white">{item.DealHeading}</p>
                                    <p className="text-xs text-gray-400">{item.DealText}</p>
                                    <p className="text-sm font-semibold text-yellow-400 mt-1">${item.Price}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-300">Qty:</p>
                                    <p className="text-lg font-bold text-white">{item.quantity}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-center">No items in the cart</p>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="mt-6 border-t border-gray-700 pt-4">
                        <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-md">
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddToCardSlider;
