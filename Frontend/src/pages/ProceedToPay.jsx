import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../slice/CartSlice";
import { JazzCashPayment } from "../components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ProceedToPay = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPayment, setShowPayment] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handlePayClick = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You need to log in first to continue.");
            navigate('/login');
            return;
        }

        if (!selectedItem) {
            toast.error("Please select an item before proceeding to payment.");
            return;
        }
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/user/orders`,
                {
                    menuId: selectedItem.id,
                    DealHeading: selectedItem.DealHeading,
                    DealText: selectedItem.DealText,
                    Price: selectedItem.Price,
                    imageUrl: selectedItem.imageUrl,
                    category: selectedItem.category,
                    selectedDrink: selectedItem.selectedDrink,
                    quantity: selectedItem.quantity,
                    selectedAddOns: selectedItem.selectedAddOns,
                    selectedDrinkSize: selectedItem.selectedDrinkSize
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (response.status === 201) {
                toast.success("Order has been processed successfully.");
                setShowPayment(true);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to process order.");
        }
    };

    const handleRemoveItem = (id) => {
        console.log(id);
        dispatch(removeFromCart(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);

    const handleClosePayment = () => {
        setShowPayment(false);
        setSelectedItem(null);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#121212] to-[#1a1a1a] w-screen">
            <ToastContainer />
            <div className="p-8 bg-[#1f1f1f] rounded-2xl shadow-2xl max-w-lg w-full my-10">
                {!selectedItem ? (
                    <>
                        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">Proceed to Checkout</h1>

                        {cartItems.length === 0 ? (
                            <p className="text-center w-full text-yellow-400 text-2xl font-semibold">No items in the <i className="text-3xl ri-shopping-cart-2-fill"></i></p>
                        ) : (
                            <ul className="space-y-4 mb-6">
                                {cartItems.map(item => (
                                    <li
                                        key={item.id}
                                        className="flex justify-between items-center text-white bg-[#2c2c2c] rounded-lg px-4 py-3 hover:bg-[#444] transition-all cursor-pointer"
                                        onClick={() => handleItemClick(item)}
                                    >
                                        <div>
                                            <h4>{item.DealHeading} - Rs. {item.Price}</h4>
                                            <p>{item.DealText}</p>
                                            <p>Quantity: {item.quantity}</p>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRemoveItem(item.id);
                                            }}
                                            className="text-red-500 hover:text-red-400 transition-all"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {cartItems.length > 0 && (
                            <button
                                onClick={handleClearCart}
                                className="w-full bg-red-600 text-white py-3 rounded-lg mb-4 hover:bg-red-500 transition-all"
                            >
                                Clear Cart
                            </button>
                        )}
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold text-yellow-400 mb-4 text-center">Item Details</h2>
                        <div className="bg-[#2c2c2c] text-white p-4 rounded-lg mb-4">
                            <h3 className="text-xl font-semibold">{selectedItem.DealHeading}</h3>
                            <p>{selectedItem.DealText}</p>
                            <p>Price: Rs. {selectedItem.Price}</p>
                            <p>Quantity: {selectedItem.quantity}</p>
                            <p>Selected Drink: {selectedItem.selectedDrink} {selectedItem.selectedDrinkSize}</p>

                            {Array.isArray(selectedItem.selectedAddOns) && selectedItem.selectedAddOns.length > 0 && (
                                <div>
                                    <h4 className="mt-2">Add-ons:</h4>
                                    <ul>
                                        {selectedItem.selectedAddOns.map((addon, index) => (
                                            <li key={index} className="text-sm">{addon.name} - Rs. {addon.price}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="mt-4">
                                <img
                                    src={selectedItem.imageUrl}
                                    alt={selectedItem.DealHeading}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => setSelectedItem(null)}
                            className="w-full bg-gray-600 text-white py-3 rounded-lg mb-4 hover:bg-gray-500 transition-all"
                        >
                            Back to Cart
                        </button>

                        {!showPayment ? (
                            <button
                                onClick={handlePayClick}
                                className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 transition-all"
                            >
                                Proceed to Payment
                            </button>
                        ) : (
                            <div className="text-white mt-4 text-center">
                                <h2 className="text-2xl font-semibold mb-2">Jazz Cash Payment</h2>
                                <JazzCashPayment
                                    paymentAmount={selectedItem.Price}
                                    paymentMethod="JazzCash"
                                    item={selectedItem}
                                    cartItems={cartItems}
                                    handleClose={handleClosePayment}
                                />
                            </div>
                        )}
                    </>
                )}

                {showPayment && !selectedItem && (
                    <div className="text-white mt-4 text-center">
                        <JazzCashPayment
                            paymentAmount={totalPrice}
                            paymentMethod="JazzCash"
                            item={cartItems}
                            handleClose={handleClosePayment}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProceedToPay;
