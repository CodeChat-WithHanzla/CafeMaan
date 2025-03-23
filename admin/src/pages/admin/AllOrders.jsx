import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router";

function AllOrders() {
    const { aToken, orders, getAllOrders, updateOrderStatus, paymentCompleted } =
        useContext(AdminContext);
    const navigate = useNavigate();

    const handleCancel = async (id) => {
        await updateOrderStatus("cancel", id);
        getAllOrders();
    };

    const handleComplete = async (id) => {
        await updateOrderStatus("complete", id);
        getAllOrders();
    };

    const handlePayment = async (id) => {
        await paymentCompleted(id);
        getAllOrders();
    };

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

            <div className="bg-[#1E1E1E] border border-[#FCB116] rounded-lg text-sm max-h-[80vh] overflow-y-auto">
                <div className="hidden sm:grid grid-cols-[0.5fr_2fr_3fr_1fr_1fr_1fr_2fr_1fr] py-3 px-6 border-b border-[#FCB116] bg-[#232323] text-white">
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
                            onClick={() => { navigate(`/admin-orders/${order._id}`) }}
                            key={order._id}
                            className="p-4 border-b border-[#FCB116] hover:bg-[#333] text-white"
                        >
                            <div className="hidden sm:grid sm:grid-cols-[0.5fr_2fr_3fr_1fr_1fr_1fr_2fr_1fr] items-center">
                                <p>{index + 1}</p>
                                <p>
                                    {order.userId.name} ({order.userId.phoneNumber})
                                </p>
                                <p className="truncate">{order.DealHeading}</p>
                                <p>Rs.{order.Price}</p>
                                <p>{order.isPaymentCompleted ? "Paid ✅" : "Pending ❌"}</p>
                                <p>{order.status}</p>
                                <div className="flex gap-4">
                                    {["completed", "cancelled", "paid"].includes(
                                        order.status.toLowerCase()
                                    ) ? (
                                        <p className="text-gray-400">{order.status}</p>
                                    ) : (
                                        <>
                                            <button
                                                className="text-red-400 hover:text-red-600 text-sm border border-red-400 px-2 py-1 rounded"
                                                onClick={() => handleCancel(order._id)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="text-green-400 hover:text-green-600 text-sm border border-green-400 px-2 py-1 rounded"
                                                onClick={() => handleComplete(order._id)}
                                            >
                                                Complete
                                            </button>
                                        </>
                                    )}
                                    {!order.isPaymentCompleted &&
                                        !["cancelled"].includes(order.status.toLowerCase()) && (
                                            <button
                                                className="text-yellow-400 hover:text-yellow-600 text-lg"
                                                onClick={() => handlePayment(order._id)}
                                            >
                                                💰
                                            </button>
                                        )}
                                </div>
                            </div>
                            <div className="sm:hidden flex flex-col gap-2">
                                <p className="text-gray-400">Order #{index + 1}</p>
                                <p>
                                    <span className="font-semibold">User:</span>{" "}
                                    {order.userId.name} ({order.userId.phoneNumber})
                                </p>
                                <p>
                                    <span className="font-semibold">Deal:</span>{" "}
                                    {order.DealHeading}
                                </p>
                                <p>
                                    <span className="font-semibold">Price:</span> Rs.
                                    {order.Price}
                                </p>
                                <p>
                                    <span className="font-semibold">Payment:</span>{" "}
                                    {order.isPaymentCompleted ? "Paid ✅" : "Pending ❌"}
                                </p>
                                <p>
                                    <span className="font-semibold">Status:</span> {order.status}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["completed", "cancelled", "paid"].includes(
                                        order.status.toLowerCase()
                                    ) ? (
                                        <p className="text-gray-400">{order.status}</p>
                                    ) : (
                                        <>
                                            <button
                                                className="text-red-400 hover:text-red-600 text-sm border border-red-400 px-3 py-1 rounded w-full"
                                                onClick={() => handleCancel(order._id)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="text-green-400 hover:text-green-600 text-sm border border-green-400 px-3 py-1 rounded w-full"
                                                onClick={() => handleComplete(order._id)}
                                            >
                                                Complete
                                            </button>
                                        </>
                                    )}
                                    {!order.isPaymentCompleted &&
                                        !["cancelled"].includes(order.status.toLowerCase()) && (
                                            <button
                                                className="text-yellow-400 hover:text-yellow-600 text-lg border border-yellow-400 px-3 py-1 rounded w-full"
                                                onClick={() => handlePayment(order._id)}
                                            >
                                                Pay 💰
                                            </button>
                                        )}
                                </div>
                            </div>
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
