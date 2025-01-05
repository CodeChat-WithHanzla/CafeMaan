import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMore, addItem } from "../slice/PaidCartSlice";
import axios from "axios";

const JazzCashPayment = ({ paymentAmount, paymentMethod, item, cartItems }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const handlePayment = async () => {
        try {
            const response = await axios.post("/payment", {
                paymentAmount: paymentAmount,
            });

            const data = response.data;

            if (data.success) {
                if (paymentMethod === "all") {
                    console.log(cartItems);

                    dispatch(addMore({ items: cartItems }));
                } else if (paymentMethod === "single" && item) {
                    console.log(item);
                    dispatch(addItem(item));
                }
            }
        } catch (error) {
            console.error("Error processing payment:", error);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="w-full bg-yellow-400 text-[#171717] py-3 rounded font-semibold hover:bg-yellow-500 transition duration-300"
            >
                Open JazzCash Payment
            </button>
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
                        <button
                            onClick={handlePayment}
                            className="w-full bg-yellow-400 text-[#171717] py-3 rounded font-semibold hover:bg-yellow-500 transition duration-300"
                        >
                            Confirm Payment
                        </button>
                        <p className="text-center text-gray-400 mt-6 text-sm">
                            By proceeding, you agree to the{" "}
                            <a href="#" className="text-yellow-400 hover:underline">
                                Terms & Conditions
                            </a>.
                        </p>
                        <button
                            onClick={() => setIsOpen(false)}
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
