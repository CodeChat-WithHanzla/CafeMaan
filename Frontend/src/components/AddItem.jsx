import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from './Input';

function AddItem() {
    const [menuItems, setMenuItems] = useState([]);
    const [dealHeading, setDealHeading] = useState('');
    const [dealText, setDealText] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    const addMenuItem = (newItem) => {
        setMenuItems([...menuItems, newItem]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('DealHeading', dealHeading);
        formData.append('DealText', dealText);
        formData.append('Price', Number(price));
        formData.append('Rating', Number(rating));
        formData.append('Category', category);
        if (image) {
            formData.append('image', image);
        }

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/admin/menus`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const newItem = response.data;
            addMenuItem(newItem);

            // Reset form fields
            setDealHeading('');
            setDealText('');
            setPrice('');
            setRating('');
            setCategory('');
            setImage(null);
            e.target.reset();

            // Success toast
            toast.success('Menu item added successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);

            // Error toast
            toast.error('There was an error adding the menu item.');
        }
    };

    return (
        <div className="min-h-screen bg-[#121212] text-gray-200 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-[#1e1e1e] rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">Add Menu Item</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Deal Heading"
                        value={dealHeading}
                        setValue={setDealHeading}
                        placeholder="Enter deal heading"
                        className="bg-[#2a2a2a] text-gray-300 border-gray-600"
                    />
                    <Input
                        label="Deal Text"
                        value={dealText}
                        setValue={setDealText}
                        placeholder="Enter deal text"
                        className="bg-[#2a2a2a] text-gray-300 border-gray-600"
                    />
                    <Input
                        label="Price"
                        value={price}
                        setValue={setPrice}
                        placeholder="Enter price"
                        type="number"
                        className="bg-[#2a2a2a] text-gray-300 border-gray-600"
                    />
                    <Input
                        label="Rating"
                        value={rating}
                        setValue={setRating}
                        placeholder="Enter rating"
                        type="number"
                        className="bg-[#2a2a2a] text-gray-300 border-gray-600"
                    />
                    <Input
                        label="Category"
                        value={category}
                        setValue={setCategory}
                        placeholder="Enter category"
                        className="bg-[#2a2a2a] text-gray-300 border-gray-600"
                    />
                    <div className="mb-4">
                        <label
                            htmlFor="image"
                            className="block text-gray-300 text-sm font-semibold mb-2"
                        >
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="block w-full text-gray-300 bg-[#2a2a2a] border border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold"
                    >
                        Add Item
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AddItem;