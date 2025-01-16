import React, { useState } from 'react'

function DeleteItem() {
    const [menuItems, setMenuItems] = useState([
        {
            DealHeading: "Any Two Deal",
            DealText: "Any Two Burgers and any 2 drinks",
            Price: 1399,
            imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2FANY-2-DEAL.webp&w=1080&q=75",
            rating: 3,
            category: "Meal",
        },
    ]);
    const deleteMenuItem = (index) => {
        setMenuItems(menuItems.filter((_, i) => i !== index));
    };
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Delete Menu Items</h2>
            {menuItems.map((item, index) => (
                <div key={index} className="mb-2 flex justify-between items-center">
                    <p>{item.DealHeading}</p>
                    <button onClick={() => deleteMenuItem(index)} className="bg-red-500 text-white p-2 rounded">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default DeleteItem