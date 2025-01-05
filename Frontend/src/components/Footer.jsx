import React, { useState } from 'react';
import { FooterSignature, FooterItem, MapEmbed } from './index';

function Footer() {
    const [showMap, setShowMap] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const Items = [
        {
            Heading: "Menu",
            items: ["Deals", "Beef Burgers", "Pizza", "Quick Bites", "Fries"]
        },
        {
            Heading: "Location",
            items: ["Qasur"]
        }
    ];

    const handleLocationClick = (location) => {
        if (location === "Qasur") {
            setIsLoading(true);
            setTimeout(() => {
                setShowMap(true);
                setIsLoading(false);
            }, 2000);
        } else {
            setShowMap(false);
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#121212] py-6 w-screen mt-auto text-white">
            <div className="text-center">
                <FooterSignature />
            </div>
            <div className="sm:p-20 p-5 flex justify-between items-center">
                <div>
                    {Items.map((item, index) => (
                        <FooterItem
                            key={index}
                            Heading={item.Heading}
                            items={item.items.map((subItem, idx) => (
                                <span
                                    key={idx}
                                    className="cursor-pointer hover:text-yellow-300 transition"
                                    onClick={() => handleLocationClick(subItem)}
                                >
                                    {subItem}
                                </span>
                            ))}
                        />
                    ))}
                </div>
                <div className="flex justify-center items-center w-full">
                    {isLoading ? (
                        <div className="flex flex-col items-center">
                            <div className="animate-spin h-10 w-10 border-4 border-yellow-300 border-t-transparent rounded-full"></div>
                            <p className="mt-2 text-yellow-300">Loading map...</p>
                        </div>
                    ) : showMap ? (
                        <MapEmbed />
                    ) : null}
                </div>
            </div>
            <div className="text-center mt-5 -mb-1">
                All Rights Reserved. 2024© CaféMaan
                <div className="font-mono">
                    POWERED BY{' '}
                    <a
                        href="https://github.com/CodeChat-WithHanzla/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="cursor-pointer text-yellow-300">HanzlaDev.</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
