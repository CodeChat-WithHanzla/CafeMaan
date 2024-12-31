import React, { useState, useEffect, useRef } from 'react';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null);
    const isLoggedIn = true;

    const toggleUserMenu = () => {
        setIsUserMenuOpen((prev) => !prev);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target)
            ) {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
    }, [isUserMenuOpen]);

    return (
        <header className={`bg-[#121212] text-white w-screen shadow-md relative z-20 ${isMenuOpen ? 'h-96' : ''}`}>
            <div className="flex justify-between items-center px-6 py-4 md:px-8">
                <img
                    className="w-14 md:w-16 transition-all duration-300 hover:scale-105"
                    src="https://res.cloudinary.com/dwlbprnr5/image/upload/v1735326168/WhatsApp_Image_2024-12-27_at_23.09.20_b99ffbd8_n3nktm.jpg"
                    alt="Logo"
                />
                <button
                    className="md:hidden text-3xl focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
                </button>

                <nav
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } absolute top-20 left-0 w-full bg-[#121212] md:static md:block md:w-auto z-30`}
                >
                    <ul className="flex flex-col items-center md:flex-row gap-6 md:gap-8 py-4 md:py-0 bg-[#171717] sm:bg-inherit">
                        {['Home', 'Menu', 'Contact Us', 'About'].map((item, index) => {
                            const path =
                                item === 'Home' ? '/' :
                                    item === 'Menu' ? '/menu' :
                                        item === 'Contact Us' ? '/contact-us' :
                                            item === 'About' ? '/about-us' : '';

                            return (
                                <li key={index} className="relative group">
                                    <Link to={path}>
                                        <div className="cursor-pointer text-lg md:text-base hover:text-yellow-400 transition duration-300 md:mb-2">
                                            {item}
                                        </div>
                                    </Link>
                                    <div className="h-1 bg-yellow-500 w-full absolute bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                </li>
                            );
                        })}

                        <div className="flex justify-center md:hidden gap-4 text-2xl mt-4 relative">
                            <i onClick={toggleUserMenu} className="ri-user-3-fill hover:text-yellow-400 transition duration-300"></i>
                            <i className="ri-shopping-cart-2-fill hover:text-yellow-400 transition duration-300"></i>
                            {isUserMenuOpen && (
                                <div
                                    className="absolute right-0 top-12 bg-[#171717] shadow-lg rounded-md p-4 text-sm font-bold mt-1"
                                    ref={userMenuRef}
                                >
                                    {isLoggedIn ? (
                                        <button className="text-white hover:text-yellow-400 transition duration-300">
                                            Logout
                                        </button>
                                    ) : (
                                        <Link
                                            to="/login"
                                            className="text-white hover:text-yellow-400 transition duration-300"
                                        >
                                            Login
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    </ul>
                </nav>

                <div className="hidden md:flex items-center gap-6 text-xl relative">
                    <i
                        className="ri-user-3-fill hover:text-yellow-400 transition duration-300 cursor-pointer"
                        onClick={toggleUserMenu}
                    ></i>
                    <i className="ri-shopping-cart-2-fill hover:text-yellow-400 transition duration-300"></i>

                    {isUserMenuOpen && (
                        <div
                            className="absolute right-0 top-12 bg-[#171717] shadow-lg rounded-md p-4 text-sm font-bold mt-1"
                            ref={userMenuRef}
                        >
                            {isLoggedIn ? (
                                <button className="text-white hover:text-yellow-400 transition duration-300">
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="text-white hover:text-yellow-400 transition duration-300"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
