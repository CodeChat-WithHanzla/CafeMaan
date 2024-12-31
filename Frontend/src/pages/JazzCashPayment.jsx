import React from "react";

const JazzCashPayment = ({ paymentAmount=300 }) => {
    const handlePayment = () => {
        console.log("Payment Initiated for Amount:", paymentAmount);
    };

    return (
        <div className="min-h-screen bg-[#171717] flex items-center justify-center p-4">
            <div className="bg-[#121212] w-full max-w-md rounded-lg shadow-md p-6 text-white">
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
            </div>
        </div>
    );
};

export default JazzCashPayment;
