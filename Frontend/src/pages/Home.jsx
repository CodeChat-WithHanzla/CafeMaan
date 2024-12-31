import React from 'react';
import { Carousel, MenuHeader, MenuItems, AddToCart } from '../components';
import { useSelector } from 'react-redux';


function Home() {
    const selectedItem = useSelector(state => state.selectedItem)
    return (

        <div className="bg-[#121212] min-h-screen flex flex-col w-screen overflow-x-hidden">
            <div className="bg-[#171717] flex-grow">
                <Carousel />
                <MenuHeader />
            </div>
            <div className="bg-[#121212] flex-grow">
                <MenuItems item={'Deal'} />
                <MenuItems item={'Deal'} />
                <MenuItems item={'Deal'} />
            </div>

            {selectedItem && <AddToCart DealHeading={selectedItem.DealHeading} DealText={selectedItem.DealText} Price={selectedItem.Price} imageUrl={selectedItem.imageUrl} rating={selectedItem.rating} category={selectedItem.category} />}
        </div>

    );
}

export default Home;
