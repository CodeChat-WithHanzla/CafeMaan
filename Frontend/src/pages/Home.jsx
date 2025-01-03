import React, { useState } from 'react';
import { Carousel, MenuHeader, MenuItems, AddToCart } from '../components';
import { useSelector } from 'react-redux';


function Home() {
    const selectedItem = useSelector(state => state.selectedItem)
    const [showCart, setShowCart] = useState(true)
    return (

        <div className="bg-[#121212] min-h-screen flex flex-col w-screen overflow-x-hidden">
            <div className="bg-[#171717] flex-grow">
                <Carousel />
                <MenuHeader />
            </div>
            <div className="bg-[#121212] flex-grow">
                <MenuItems item={'Deal'} setShowCart={setShowCart}/>
                <MenuItems item={'Deal'} setShowCart={setShowCart}/>
                <MenuItems item={'Deal'} setShowCart={setShowCart}/>
            </div>

            {selectedItem && showCart && <AddToCart setShowCart={setShowCart}  DealHeading={selectedItem.DealHeading} DealText={selectedItem.DealText} Price={selectedItem.Price} imageUrl={selectedItem.imageUrl} rating={selectedItem.rating} category={selectedItem.category} />}
        </div>

    );
}

export default Home;
