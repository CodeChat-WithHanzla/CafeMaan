import React, { useState } from 'react';
import Input from './Input';

function UpdateItem() {
    const [editingItemIndex, setEditingItemIndex] = useState(null);
    const [menuItems, setMenuItems] = useState([
        {
            DealHeading: "Any Two Deal",
            DealText: "Any Two Burgers and any 2 drinks",
            Price: 1399,
            imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2FANY-2-DEAL.webp&w=1080&q=75",
            rating: 3,
            category: "Meal",
        },
    ]);

    // Initially no item is being edited
    const [formState, setFormState] = useState({
        DealHeading: '',
        DealText: '',
        Price: '',
        rating: '',
        category: ''
    });

    const updateMenuItem = (index, updatedItem) => {
        const updatedItems = menuItems.map((item, i) => (i === index ? updatedItem : item));
        setMenuItems(updatedItems);
        setEditingItemIndex(null);
    };

    const handleChange = (field, value) => {
        setFormState(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleEditClick = (index) => {
        const item = menuItems[index];
        setFormState({
            DealHeading: item.DealHeading,
            DealText: item.DealText,
            Price: item.Price,
            rating: item.rating,
            category: item.category
        });
        setEditingItemIndex(index);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Update Menu Item</h2>
            {menuItems.map((item, index) => (
                <div key={index} className="mb-4">
                    {editingItemIndex === index ? (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const updatedItem = {
                                    DealHeading: formState.DealHeading,
                                    DealText: formState.DealText,
                                    Price: formState.Price ? Number(formState.Price) : item.Price,
                                    rating: formState.rating ? Number(formState.rating) : item.rating,
                                    category: formState.category,
                                };
                                updateMenuItem(index, updatedItem);
                            }}
                        >
                            <Input
                                label="DealHeading"
                                value={formState.DealHeading}
                                setValue={(value) => handleChange('DealHeading', value)}
                                placeholder="Heading"
                            />
                            <Input
                                label="DealText"
                                value={formState.DealText}
                                setValue={(value) => handleChange('DealText', value)}
                                placeholder="Text"
                            />
                            <Input
                                label="Price"
                                value={formState.Price}
                                setValue={(value) => handleChange('Price', value)}
                                placeholder="Price"
                                type="number"
                            />
                            <Input
                                label="Rating"
                                value={formState.rating}
                                setValue={(value) => handleChange('rating', value)}
                                placeholder="Rating"
                                type="number"
                            />
                            <Input
                                label="Category"
                                value={formState.category}
                                setValue={(value) => handleChange('category', value)}
                                placeholder="Category"
                            />
                            <button type="submit" className="bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600">
                                <i className="ri-save-2-line mr-2"></i> Save
                            </button>
                        </form>
                    ) : (
                        <div className="flex gap-5 items-center">
                            <p>{item.DealHeading}</p>
                            <button onClick={() => handleEditClick(index)} className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
                                <i className="ri-edit-2-line mr-2"></i> Edit
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UpdateItem;
