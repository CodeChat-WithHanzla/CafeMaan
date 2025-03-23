import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import html2canvas from "html2canvas";

function Order() {
    const { orderId } = useParams();
    const { orders } = useContext(AdminContext);
    const [order, setOrder] = useState(null);
    const orderRef = useRef(null);

    useEffect(() => {
        const foundOrder = orders.find((o) => o._id === orderId);
        setOrder(foundOrder);
    }, [orderId, orders]);

    if (!order) return <p className="text-white text-center mt-10">Order not found.</p>;

    const handleDownloadImage = async () => {
        if (!orderRef.current) return;

        try {
            const canvas = await html2canvas(orderRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: null,
            });

            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = `Order_${orderId}.png`;
            link.click();
        } catch (error) {
            console.error("Error capturing image:", error);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-[#121212] text-[#FCB116] mt-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Order Details</h2>
            <div ref={orderRef} className="bg-black p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                        <img
                            src={order.imageUrl}
                            alt={order.DealHeading}
                            className="w-60 h-60 rounded-lg shadow-lg"
                            crossOrigin="anonymous"
                        />
                    </div>

                    {/* Order Info */}
                    <div className="flex-grow text-lg space-y-3 text-white">
                        <p><strong>Deal:</strong> {order.DealHeading}</p>
                        <p><strong>Description:</strong> {order.DealText}</p>
                        <p><strong>Category:</strong> {order.category}</p>
                        <p><strong>Price:</strong> Rs.{order.Price}</p>
                        <p><strong>Quantity:</strong> {order.quantity}</p>
                        <p><strong>Drink:</strong> {order.selectedDrink || "None"} - {order.selectedDrinkSize || "N/A"}</p>
                        <p><strong>User:</strong> {order.userId?.name} ({order.userId?.phoneNumber})</p>
                        <p><strong>Status:</strong> {order.status}</p>
                        <p><strong>Payment:</strong> {order.isPaymentCompleted ? "Paid ✅" : "Pending ❌"}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button
                    onClick={handleDownloadImage}
                    className="px-5 py-3 bg-[#FCB116] text-black font-bold rounded-lg shadow-md hover:bg-[#e0a106] transition"
                >
                    Download Order Details
                </button>
            </div>
        </div>
    );
}

export default Order;
