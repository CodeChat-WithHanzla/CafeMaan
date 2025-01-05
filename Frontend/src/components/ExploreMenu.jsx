import React from "react";
import { useNavigate } from "react-router-dom"
function ExploreMenu() {
    const navigate = useNavigate()
    const exploreMenu = [
        "https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png",
        "https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-alacart-2023-05-31095826.png",
        "https://www.kfcpakistan.com/images/eae296d0-c0fa-11ef-9fcf-0f37e3943d32-590x480withoutBG-2024-12-23065538.png",
        "https://www.kfcpakistan.com/images/afc536d0-ff99-11ed-a006-17c81341cbe8-Signaturebox-2023-05-31095826.png",
        "https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png",
        "https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-alacart-2023-05-31095826.png",
        "https://www.kfcpakistan.com/images/eae296d0-c0fa-11ef-9fcf-0f37e3943d32-590x480withoutBG-2024-12-23065538.png",
        "https://www.kfcpakistan.com/images/afc536d0-ff99-11ed-a006-17c81341cbe8-Signaturebox-2023-05-31095826.png",
    ];

    return (
        <>
            <div className="w-full flex justify-center mb-20">
                <div className="relative group mt-10">
                    <div className="text-white text-3xl mb-3 font-bold cursor-pointer">
                        EXPLORE MENU
                    </div>
                    <div className="h-1 bg-yellow-500 w-full absolute bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center mb-20">
                <ul className="flex items-center gap-x-6 p-4 overflow-x-auto whitespace-nowrap scrollbar-hidden max-w-[calc(4*5rem)] md:max-w-[calc(4*15rem)]">
                    {exploreMenu.map((item, index) => (
                        <li
                            onClick={() => navigate('/menu')}
                            key={index}
                            className="flex-shrink-0 bg-[#1C1816] rounded-full p-2 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
                        >
                            <div className="relative group w-full h-full">
                                <img
                                    src={item}
                                    alt={`Menu item ${index + 1}`}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ExploreMenu;
