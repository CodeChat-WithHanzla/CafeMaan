import React, { useState, useEffect } from 'react';
import { Carousel, MenuHeader, MenuItems, AddToCart, ExploreMenu } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedItem } from '../slice/SelectedSlice';

function Home() {
    const selectedItem = useSelector((state) => state.selectedItem);
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(true);

    const menuBar = [
        "Burgers",
        "Paratha Roll",
        "Chicken Sandwich",
        "Pasta",
        "Crispy Special",
        "Shawarma",
        "Fries",
        "Pizza",
        "Regular Deal",
        "Family Deal",
    ];
    useEffect(() => {
        if (!showCart) {
            dispatch(clearSelectedItem());
        }
    }, [showCart, dispatch]);

    return (
        <div className="bg-[#121212] min-h-screen flex flex-col w-screen overflow-hidden">
            <div className="bg-[#171717] flex-grow">
                <Carousel />
                <MenuHeader menuBar={menuBar} />
            </div>
            <div className="bg-[#121212] flex-grow">
                <ExploreMenu />
                {menuBar.map((item, index) => (
                    <div key={index} id={item.replace(/\s/g, "")} className="min-h-[80vh] p-6">
                        <MenuItems item={item} setShowCart={setShowCart} />
                    </div>
                ))}
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
