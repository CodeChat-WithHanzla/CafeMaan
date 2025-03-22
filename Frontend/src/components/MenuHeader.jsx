import React from 'react';

function MenuHeader({ menuBar }) {
    const handleScroll = (item) => {
        const section = document.getElementById(item.replace(/\s/g, ""));
        if (section) {
            const headerHeight = 128; 
            const additionalOffset = 200;
            const totalOffset = headerHeight + additionalOffset;

            const sectionPosition = section.getBoundingClientRect().top + window.scrollY - totalOffset;

            window.scrollTo({
                top: sectionPosition,
                behavior: "smooth",
            });
        }
    };



    return (
        <div className="w-full h-32 flex justify-center items-center">
            <ul className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-12 p-4 md:py-0 bg-[#171717] text-white overflow-x-auto whitespace-nowrap scrollbar-hidden max-w-[calc(4*5rem)] md:max-w-[calc(4*22rem)]">
                {menuBar.map((item, index) => (
                    <li
                        key={index}
                        className="relative group flex-shrink-0 sm:w-[6rem] mr-3 cursor-pointer"
                        onClick={() => handleScroll(item)}
                    >
                        <div className="text-base hover:text-yellow-400 transition duration-300 md:mb-2 mb-1 md:font-extrabold font-bold text-nowrap">
                            {item}
                        </div>
                        <div className="h-1 bg-yellow-500 w-full absolute bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuHeader;
