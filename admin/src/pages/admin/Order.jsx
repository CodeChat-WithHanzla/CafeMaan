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

    if (!order) return <p className="text-white text-center">Order not found.</p>;
    const handleDownloadImage = () => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = order.imageUrl;

        img.onload = () => {
            html2canvas(orderRef.current, { scale: 2, useCORS: true }).then((canvas) => {
                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = `Order_${orderId}.png`;
                link.click();
            });
        };
    };


    return (
        <div className="max-w-4xl mx-auto p-6 bg-[#121212] text-[#FCB116] mt-5">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            <div ref={orderRef} className="p-4 bg-black rounded-lg shadow-lg w-fit">
                <img src={order.imageUrl} alt={order.DealHeading} className="w-48 h-48 rounded-lg mb-4" />
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
            <button
                onClick={handleDownloadImage}
                className="mt-4 px-4 py-2 bg-[#FCB116] text-black font-bold rounded-lg"
            >
                Download Order Details
            </button>
        </div>
    );
}

export default Order;
