import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllMenu() {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true); // To handle loading state
    const [error, setError] = useState(''); // To handle errors

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                // Get token from localStorage
                const token = localStorage.getItem('token');

                // If token doesn't exist, handle it
                if (!token) {
                    setError('No token found');
                    setLoading(false);
                    return;
                }

                // Send GET request to fetch menu items with the Authorization header
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/admin/menus`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`, // Include token in headers
                        },
                    }
                );

                // Update the state with the fetched menu items
                setMenuItems(response.data);
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                console.error('Error fetching menu items:', error);
                setError('Failed to fetch menu items');
                setLoading(false);
            }
        };

        fetchMenuItems();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

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
                            <td className="border border-gray-600 p-2">{item.Rating}</td>
                            <td className="border border-gray-600 p-2">{item.Category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllMenu;