import React, { useState } from 'react'

function AllMenu() {
    const [menuItems, setMenuItems] = useState([
        {
            DealHeading: "Any Two Deal",
            DealText: "Any Two Burgers and any 2 drinks",
            Price: 1399,
            imageUrl:
                "https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2FANY-2-DEAL.webp&w=1080&q=75",
            rating: 3,
            category: "Meal",
        },
    ]);
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">All Menu Items</h2>
            <table className="table-auto w-full text-left border-collapse border border-gray-600">
                <thead>
                    <tr>
                        <th className="border border-gray-600 p-2">Heading</th>
                        <th className="border border-gray-600 p-2">Text</th>
                        <th className="border border-gray-600 p-2">Price</th>
                        <th className="border border-gray-600 p-2">Rating</th>
                        <th className="border border-gray-600 p-2">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map((item, index) => (
                        <tr key={index}>
                            <td className="border border-gray-600 p-2">{item.DealHeading}</td>
                            <td className="border border-gray-600 p-2">{item.DealText}</td>
                            <td className="border border-gray-600 p-2">{item.Price}</td>
                            <td className="border border-gray-600 p-2">{item.rating}</td>
                            <td className="border border-gray-600 p-2">{item.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllMenu