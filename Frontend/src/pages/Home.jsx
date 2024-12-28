import React from 'react';
import { Carousel, MenuHeader, MenuItems } from '../components';

function Home() {
    return (
        <div className="bg-[#121212] min-h-screen flex flex-col">
            <div className="bg-[#171717] flex-grow">
                <Carousel />
                <MenuHeader />
            </div>
            <div className="bg-[#121212] flex-grow">
                <MenuItems item={'Deal'} />
                <MenuItems item={'Deal'} />
                <MenuItems item={'Deal'} />
            </div>
        </div>
    );
}

export default Home;
