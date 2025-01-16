import React, { useState } from 'react';
import Input from './Input';

function AddItem() {
    const [menuItems, setMenuItems] = useState([]);

    // State for each input field
    const [dealHeading, setDealHeading] = useState('');
    const [dealText, setDealText] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null); // State for the image file

    const addMenuItem = (newItem) => {
        setMenuItems([...menuItems, newItem]);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Add Menu Item</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    // Create a FormData object to handle the image file and other data
                    const formData = new FormData();
                    formData.append('DealHeading', dealHeading);
                    formData.append('DealText', dealText);
                    formData.append('Price', Number(price));
                    formData.append('rating', Number(rating));
                    formData.append('category', category);
                    if (image) {
                        formData.append('image', image);
                    }

                    // Simulate adding menu item
                    const newItem = {
                        DealHeading: dealHeading,
                        DealText: dealText,
                        Price: Number(price),
                        rating: Number(rating),
                        category,
                        image: image ? image.name : null, // Store image file name or other metadata
                    };
                    addMenuItem(newItem);

                    // Clear input fields
                    setDealHeading('');
                    setDealText('');
                    setPrice('');
                    setRating('');
                    setCategory('');
                    setImage(null);
                    e.target.reset();
                }}
            >
                <Input
                    label="DealHeading"
                    value={dealHeading}
                    setValue={setDealHeading}
                    placeholder="Heading"
                />
                <Input
                    label="DealText"
                    value={dealText}
                    setValue={setDealText}
                    placeholder="Text"
                />
                <Input
                    label="Price"
                    value={price}
                    setValue={setPrice}
                    placeholder="Price"
                    type="number"
                />
                <Input
                    label="Rating"
                    value={rating}
                    setValue={setRating}
                    placeholder="Rating"
                    type="number"
                />
                <Input
                    label="Category"
                    value={category}
                    setValue={setCategory}
                    placeholder="Category"
                />
                <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="text-[#e0dcdc] leading-[1.8rem] text-[16px] sm:text-[18px] font-semibold mb-[0.75rem]"
                    >
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        className="block mt-2"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Add Item</button>
            </form>
        </div>
    );
}

export default AddItem;
