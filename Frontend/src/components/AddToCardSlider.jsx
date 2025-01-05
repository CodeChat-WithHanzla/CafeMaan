import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from '../slice/CartSlice';
import "remixicon/fonts/remixicon.css";
import { useNavigate, useLocation } from "react-router-dom";

const AddToCardSlider = ({ isOpen, toggleSlider }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const items = useSelector(state => state.cart);

    const sliderRef = useRef(null);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const isCheckoutPage = location.pathname === '/pay';

    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sliderRef.current && !sliderRef.current.contains(event.target) && isOpen) {
                toggleSlider(); 
            }
        };

        
        document.addEventListener("mousedown", handleClickOutside);

        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleSlider, isOpen]);

    return (
        <div
            ref={sliderRef}
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
                                    <p className="text-sm font-semibold text-yellow-400 mt-1">Rs. {item.Price}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-300">Qty:</p>
                                    <p className="text-lg font-bold text-white">{item.quantity}</p>
                                </div>
                                <button
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className="text-red-500 hover:text-red-600 transition duration-200"
                                >
                                    <i className="ri-delete-bin-6-line text-2xl"></i>
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-center">No items in the cart</p>
                    )}
                </div>

                {items.length > 0 && !isCheckoutPage && (
                    <div className="mt-6 border-t border-gray-700 pt-4">
                        <button onClick={() => {
                            toggleSlider();
                            navigate('/pay');
                        }} className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-md">
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddToCardSlider;
