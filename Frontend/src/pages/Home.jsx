import React, { useState, useEffect } from 'react';
import { Carousel, MenuHeader, MenuItems, AddToCart, ExploreMenu } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedItem } from '../slice/SelectedSlice';
import { menuBar } from '../assets/cafemaan';
import { useNavigate } from 'react-router-dom';

function Home() {
    const selectedItem = useSelector((state) => state.selectedItem);
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!showCart) {
            dispatch(clearSelectedItem());
        }
    }, [showCart, dispatch]);


    const displayedMenuItems = menuBar.slice(0, 3);

    return (
        <div className="bg-[#121212] min-h-screen flex flex-col w-screen overflow-hidden">
            <div className="bg-[#171717] flex-grow mt-32 w-screen">
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

                <div className="flex justify-center p-6 ">
                    <button
                        onClick={() => navigate('/menu')}
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
                    _id={selectedItem._id}
                />
            )}
        </div>
    );
}

export default Home;