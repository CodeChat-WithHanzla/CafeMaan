import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMore, addItem } from "../slice/PaidCartSlice";
import axios from "axios";
import { toast } from "react-toastify"



const JazzCashPayment = ({ paymentAmount, paymentMethod, item, cartItems, handleClose }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(true);

    // Replace this with your actual JazzCash number
    const jazzCashNumber = "0300-1234567";
    const jazzCashAccountHolder = "Saleh Ahmed"; // Account holder's name

    const handleCashOnDelivery = () => {
        // Handle Cash on Delivery logic here
        toast.success("Cash on Delivery selected. Your order will be processed.");
        setIsOpen(false);
        handleClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#121212] w-full max-w-lg rounded-lg shadow-lg p-6 text-white transform transition-all scale-110">
                        <h1 className="text-3xl font-semibold text-yellow-400 text-center mb-6">
                            JazzCash Payment
                        </h1>
                        <div className="text-center mb-6">
                            <p className="text-lg font-medium mb-2">Total Payment Amount</p>
                            <p className="text-2xl font-bold text-yellow-400">
                                PKR {paymentAmount}
                            </p>
                        </div>
                        <div className="text-center mb-6">
                            <p className="text-lg font-medium mb-2">JazzCash Number</p>
                            <p className="text-2xl font-bold text-yellow-400">
                                {jazzCashNumber}
                            </p>
                            <p className="text-lg font-medium mt-2">Account Holder</p>
                            <p className="text-xl font-bold text-yellow-400">
                                {jazzCashAccountHolder}
                            </p>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={handleCashOnDelivery}
                                className="w-full bg-green-500 text-[#171717] py-3 rounded font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Cash on Delivery
                            </button>
                        </div>
                        <p className="text-center text-gray-400 mt-6 text-sm">
                            By proceeding, you agree to the{" "}
                            <a href="#" className="text-yellow-400 hover:underline">
                                Terms & Conditions
                            </a>.
                        </p>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                handleClose();
                            }}
                            className="absolute top-2 right-2 text-yellow-400 text-xl"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default JazzCashPayment;