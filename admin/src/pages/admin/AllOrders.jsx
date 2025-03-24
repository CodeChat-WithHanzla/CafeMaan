import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router";

function AllOrders() {
    const { aToken, orders, getAllOrders, updateOrderStatus, paymentCompleted } =
        useContext(AdminContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (aToken) {
            getAllOrders();
        } else {
            navigate("/");
        }
    }, [aToken]);

    return (
        <div className="w-full max-w-6xl mx-auto p-4 bg-[#121212] text-[#FCB116] mt-5">
            <p className="mb-3 text-lg font-semibold text-center sm:text-left">
                All Orders
            </p>

            <div className="bg-[#1E1E1E] border border-[#FCB116] rounded-lg text-sm max-h-[80vh] overflow-y-auto overflow-x-auto">
                <div className="hidden md:grid md:grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr_2fr] py-3 px-6 border-b border-[#FCB116] bg-[#232323] text-white">
                    <p>#</p>
                    <p>User</p>
                    <p>Deal</p>
                    <p>Price</p>
                    <p>Payment</p>
                    <p>Status</p>
                    <p>Actions</p>
                </div>
                {orders?.length > 0 ? (
                    orders.map((order, index) => (
                        <div
                            key={order._id}
                            className="p-4 border-b border-[#FCB116] hover:bg-[#333] text-white flex items-center justify-between"
                        >
                            <div className="hidden md:grid md:grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr_2fr] items-center flex-grow">
                                <p>{index + 1}</p>
                                <p>{order.userId.name} ({order.userId.phoneNumber})</p>
                                <p className="truncate">{order.DealHeading}</p>
                                <p>Rs.{order.Price}</p>
                                <p>{order.isPaymentCompleted ? "Paid ✅" : "Pending ❌"}</p>
                                <p>{order.status}</p>
                                <div className="flex flex-wrap gap-2">
                                    {!["completed", "cancelled", "paid"].includes(order.status.toLowerCase()) && (
                                        <>
                                            <button
                                                className="text-red-400 hover:text-red-600 text-sm border border-red-400 px-2 py-1 rounded"
                                                onClick={() => updateOrderStatus("cancel", order._id)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="text-green-400 hover:text-green-600 text-sm border border-green-400 px-2 py-1 rounded"
                                                onClick={() => updateOrderStatus("complete", order._id)}
                                            >
                                                Complete
                                            </button>
                                        </>
                                    )}
                                    {!order.isPaymentCompleted && order.status !== "cancelled" && (
                                        <button
                                            className="text-yellow-400 hover:text-yellow-600 text-lg border border-yellow-400 px-3 py-1 rounded"
                                            onClick={() => paymentCompleted(order._id)}
                                        >
                                            💰
                                        </button>
                                    )}
                                </div>
                            </div>
                            {/* Open Order Icon */}
                            <button
                                className="text-blue-400 hover:text-blue-600 text-lg ml-4"
                                onClick={() => navigate(`/admin-orders/${order._id}`)}
                            >
                                🔍
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-400 py-6">No orders available</p>
                )}
            </div>
        </div>
    );
}

export default AllOrders;