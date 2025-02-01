import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "./Input";
import { Modal } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateItem() {
    const [editingItemIndex, setEditingItemIndex] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [formState, setFormState] = useState({
        DealHeading: "",
        DealText: "",
        Price: "",
        rating: "",
        category: "",
    });

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setMessage("No token found");
                    setShowModal(true);
                    return;
                }
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/admin/menus`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setMenuItems(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching menu items:", error);
                setMessage("Failed to fetch menu items");
                setShowModal(true);
            }
        };

        fetchMenuItems();
    }, []);

    const handleChange = (field, value) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleEditClick = (index) => {
        const item = menuItems[index];
        setFormState({
            DealHeading: item.DealHeading,
            DealText: item.DealText,
            Price: item.Price,
            rating: item.Rating,
            category: item.Category,
        });
        setEditingItemIndex(index);
    };

    const handleSubmit = async (e, index) => {
        e.preventDefault();
        const updatedItem = {
            DealHeading: formState.DealHeading,
            DealText: formState.DealText,
            Price: formState.Price ? Number(formState.Price) : menuItems[index].Price,
            Rating: formState.rating ? Number(formState.rating) : menuItems[index].Rating,
            Category: formState.category,
        };

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setMessage("No token found");
                setShowModal(true);
                return;
            }

            const response = await axios.put(
                `${import.meta.env.VITE_BASE_URL}/admin/menus/${menuItems[index]._id}`,
                updatedItem,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const updatedItems = menuItems.map((item, i) =>
                i === index ? response.data : item
            );
            setMenuItems(updatedItems);
            setEditingItemIndex(null);
            toast.success("Menu item updated successfully!");
        } catch (error) {
            console.error("Error updating menu item:", error);
            toast.error("Failed to update menu item.");
        }
    };

    if (loading) {
        return <div className="text-center py-10 text-gray-300">Loading menu items...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-[#121212] text-gray-200 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Update Menu Item</h2>
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className="p-4 bg-gray-800 rounded-lg mb-4 shadow-md border border-gray-700"
                >
                    {editingItemIndex === index ? (
                        <form onSubmit={(e) => handleSubmit(e, index)} className="space-y-4">
                            <Input
                                label="Deal Heading"
                                value={formState.DealHeading}
                                setValue={(value) => handleChange("DealHeading", value)}
                                placeholder="Heading"
                            />
                            <Input
                                label="Deal Text"
                                value={formState.DealText}
                                setValue={(value) => handleChange("DealText", value)}
                                placeholder="Text"
                            />
                            <Input
                                label="Price"
                                value={formState.Price}
                                setValue={(value) => handleChange("Price", value)}
                                placeholder="Price"
                                type="number"
                            />
                            <Input
                                label="Rating"
                                value={formState.rating}
                                setValue={(value) => handleChange("rating", value)}
                                placeholder="Rating"
                                type="number"
                            />
                            <Input
                                label="Category"
                                value={formState.category}
                                setValue={(value) => handleChange("category", value)}
                                placeholder="Category"
                            />
                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditingItemIndex(null)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="flex justify-between items-center">
                            <p>{item.DealHeading}</p>
                            <button
                                onClick={() => handleEditClick(index)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                        </div>
                    )}
                </div>
            ))}
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Modal.Header className="bg-gray-800 text-gray-200">Error</Modal.Header>
                <Modal.Body className="bg-gray-800 text-gray-200">
                    <p>{message}</p>
                </Modal.Body>
            </Modal>
            <ToastContainer />
        </div>
    );
}

export default UpdateItem;
