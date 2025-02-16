import React, { useState, useEffect } from 'react';
import { Carousel, MenuHeader, MenuItems, AddToCart, ExploreMenu } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedItem } from '../slice/SelectedSlice';
import { menuBar } from '../assets/cafemaan';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Home() {
    const selectedItem = useSelector((state) => state.selectedItem);
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(true);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        if (!showCart) {
            dispatch(clearSelectedItem());
        }
    }, [showCart, dispatch]);

    // Limit the number of menu items displayed on the home page
    const displayedMenuItems = menuBar.slice(0, 3); // Show only the first 3 menu items

    return (
        <div className="bg-[#121212] min-h-screen flex flex-col w-screen overflow-hidden">
            <div className="bg-[#171717] flex-grow">
                <Carousel />
                <MenuHeader menuBar={displayedMenuItems} />
            </div>
            <div className="bg-[#121212] flex-grow">
                <ExploreMenu />
                {displayedMenuItems.map((item, index) => (
                    <div key={index} id={item.replace(/\s/g, "")} className="min-h-[80vh] p-6">
                        <MenuItems item={item} setShowCart={setShowCart} />
                    </div>
                ))}
                {/* Add a "More" button to navigate to the full menu page */}
                <div className="flex justify-center p-6">
                    <button
                        onClick={() => navigate('/menu')} // Navigate to the full menu page
                        className="bg-yellow-400 text-[#171717] py-2 px-4 rounded font-semibold hover:bg-yellow-500 transition duration-300"
                    >
                        More
                    </button>
                </div>
            </div>

            {selectedItem && showCart && (
                <AddToCart
                    setShowCart={setShowCart}
                    DealHeading={selectedItem.DealHeading}
                    DealText={selectedItem.DealText}
                    Price={selectedItem.Price}
                    imageUrl={selectedItem.imageUrl}
                    rating={selectedItem.rating}
                    category={selectedItem.category}
                />
            )}
        </div>
    );
}

export default Home;