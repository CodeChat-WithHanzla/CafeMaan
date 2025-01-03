import React from 'react';
import { FooterSignature, FooterItem } from './index';

function Footer() {
    const Items = [{
        Heading: "Menu",
        items: ["Deals", "Beef Burgers", "Pizza", "Quick Bites", "Fries"]
    }, {
        Heading: "Location",
        items: ["Qasur"]
    }]
    return (
        <div className="bg-[#121212] py-6 w-screen mt-auto text-white">
            <div className="text-center">
                <FooterSignature />
            </div>
            <div className="sm:p-20 p-5">
                {Items.map((item, index) => (<FooterItem key={index} Heading={item.Heading} items={item.items} />))}
            </div>
            <div className="text-center mt-5 -mb-1">
                All Rights Reserved. 2024© CaféMaan
                <div className='font-mono'>POWERED BY <a href="https://github.com/CodeChat-WithHanzla/" target="_blank" rel="noopener noreferrer"><span className='cursor-pointer text-yellow-300 '>HanzlaDev.</span></a></div>
            </div>
        </div>
    );
}

export default Footer;
