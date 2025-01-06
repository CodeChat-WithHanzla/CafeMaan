import React from 'react';
import { FooterSignature, FooterItem, MapEmbed } from './index';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const Items = [
        { Heading: "Menu", items: ["Deals", "Chicken Burger", "Beef Burger", "Pizza", "Fries", "Cheeseburger", "Veggie Burger", "Pasta", "Salads", "Shakes", "Desserts"] },
        { Heading: "Location", items: ["Qasur"] },
        { Heading: "CafeMaan", items: ["About"] },
    ];

    const handleMenuClick = (item, heading) => {
        if (heading === "CafeMaan" && item === "About") {
            navigate('/about-us');
        } else if (heading === "Location") {
            console.log(`Navigate to location: ${item}`);
        } else {
            navigate('/menu');
            setTimeout(() => {
                const section = document.getElementById(item);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    };


    return (
        <div className="bg-[#121212] p-6 w-screen mt-auto text-white">
            <div className="text-center">
                <FooterSignature />
            </div>
            <div className="sm:p-20 p-5 flex justify-around gap-20 items-center">
                <div className='flex justify-around items-start w-screen'>
                    {Items.map((item, index) => (
                        <FooterItem
                            key={index}
                            Heading={item.Heading}
                            items={item.items.map((subItem, idx) => (
                                <span
                                    key={idx}
                                    className="cursor-pointer hover:text-yellow-300 transition"
                                    onClick={() => {
                                        handleMenuClick(subItem, item.Heading);
                                    }}
                                >
                                    {subItem}
                                </span>
                            ))}
                        />
                    ))}
                </div>
                <div className="flex justify-center items-center w-full">
                    <MapEmbed />
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
