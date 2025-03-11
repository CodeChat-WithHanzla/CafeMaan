import React, { useEffect, useState, useCallback } from 'react';
import { MenuCard } from './index';
import axios from 'axios';
import { toast } from 'react-toastify';

function MenuItems({ item, setShowCart }) {
    const [deals, setDeals] = useState([]);

    const loadMenuItems = useCallback(async () => {
        try {
            const { status, data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/menus/${item}`);
            if (status === 200) {
                setDeals(data);
            }
        } catch (error) {
            toast.error('Failed to load menu items. Check Internet Connection.');
        }
    }, [item]);

    useEffect(() => {
        loadMenuItems();
    }, [item]);

    const menuItemsDesc = Array.isArray(deals) ? deals.filter(deal => deal.Category === item) : [];

    return (
        <div className="w-screen text-white pt-3">
            <div className="ml-10 font-bold text-3xl mb-4">{item}</div>
            <div className="flex justify-center items-center flex-wrap gap-5 mb-20">
                {menuItemsDesc.length > 0 && menuItemsDesc.map((deal) => (
                    <MenuCard
                        key={deal._id}
                        setShowCart={setShowCart}
                        DealHeading={deal.DealHeading}
                        DealText={deal.DealText}
                        Price={deal.Price}
                        imageUrl={deal.imageUrl}
                        rating={deal.Rating}
                        category={deal.Category}
                        _id={deal._id}
                    />
                ))}
            </div>
        </div>
    );
}

export default MenuItems;
