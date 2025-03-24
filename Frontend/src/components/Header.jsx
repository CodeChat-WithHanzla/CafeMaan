import React, { useState, useEffect, useRef } from "react";
import "remixicon/fonts/remixicon.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AddToCardSlider from "../components/AddToCardSlider";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slice/UserSlice";
import { setIsLoggedIn, setUserData } from '../slice/UserSlice';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const userMenuRef = useRef(null);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const location = useLocation();

    const toggleUserMenu = () => {
        setIsUserMenuOpen((prev) => !prev);
    };

    const toggleCartSlider = () => {
        setIsCartOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target) &&
                !event.target.closest(".ri-user-3-fill") &&
                !event.target.closest("a")
            ) {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isUserMenuOpen]);


    const handleLogout = async () => {
        try {
            dispatch(setIsLoggedIn(false));
            dispatch(setUserData(null))
            localStorage.removeItem("token");
            navigate('/login');
        } catch (error) {
            console.error(`There was an error while logging out:`, error);
        }
        dispatch(logout());
    };

    return (
        <header
            className={`bg-[#121212] text-white w-screen shadow-md sticky z-50 top-0 ${isMenuOpen ? "h-96" : ""}`}
        >
            <div className="flex justify-between items-center px-6 py-4 md:px-8">
                <AddToCardSlider isOpen={isCartOpen} toggleSlider={toggleCartSlider} />
                <img
                    className="w-14 md:w-16 transition-all duration-300 hover:scale-105"
                    src="https://res.cloudinary.com/dwlbprnr5/image/upload/v1735671465/Asset_4_ucj8qd.png"
                    alt="CafeMaan"
                />
                <button
                    className="md:hidden text-3xl focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                </button>

                <nav
                    className={`${isMenuOpen ? "block" : "hidden"} absolute top-20 left-0 w-full bg-[#121212] md:static md:block md:w-auto z-30`}
                >
                    <ul className="flex flex-col items-center md:flex-row gap-6 md:gap-8 py-4 md:py-0 bg-[#171717] sm:bg-inherit">
                        {["Home", "Menu", "Contact Us", "About"].map((item, index) => {
                            const path =
                                item === "Home"
                                    ? "/"
                                    : item === "Menu"
                                        ? "/menu"
                                        : item === "Contact Us"
                                            ? "/contact-us"
                                            : item === "About"
                                                ? "/about-us"
                                                : "";

                            const isActive = location.pathname === path;

                            return (
                                <li key={index} className="relative group">
                                    <Link to={path} onClick={() => setIsMenuOpen(false)}>
                                        <div
                                            className={`cursor-pointer text-lg md:text-xl font-bold ${isActive ? "text-yellow-400" : "hover:text-yellow-400"} transition duration-300 mb-1`}
                                        >
                                            {item}
                                        </div>
                                    </Link>
                                    <div
                                        className={`h-1 bg-yellow-500 w-full absolute bottom-0 scale-x-0 group-hover:scale-x-100 ${isActive ? "scale-x-100" : ""
                                            } transition-transform origin-left duration-300`}
                                    ></div>
                                </li>
                            );
                        })}

                        {/* Admin Tab */}
                        <li className="relative group">
                            <Link to={import.meta.env.VITE_ADMIN_URL || ''} onClick={() => setIsMenuOpen(false)}>
                                <div
                                    className={`cursor-pointer text-lg md:text-xl font-bold hover:text-yellow-400 transition duration-300 mb-1`}
                                >
                                    Admin
                                </div>
                            </Link>
                        </li>

                        <div className="flex justify-center md:hidden gap-4 text-2xl mt-4 relative">
                            <i
                                onClick={toggleUserMenu}
                                className="ri-user-3-fill hover:text-yellow-400 transition duration-300"
                            ></i>
                            {isLoggedIn && <i
                                onClick={toggleCartSlider}
                                className="ri-shopping-cart-2-fill hover:text-yellow-400 transition duration-300"
                            ></i>}
                            {isUserMenuOpen && (
                                <div
                                    className="absolute right-0 top-12 bg-[#171717] shadow-lg rounded-md p-4 text-sm font-bold mt-1"
                                    ref={userMenuRef}
                                >
                                    {isLoggedIn ? (
                                        <button
                                            onClick={handleLogout}
                                            className="text-white hover:text-yellow-400 transition duration-300"
                                        >
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
                        className="ri-user-3-fill hover:text-yellow-400 transition duration-300 cursor-pointer font-bold"
                        onClick={toggleUserMenu}
                    ></i>
                    {isLoggedIn &&
                        <i
                            onClick={toggleCartSlider}
                            className="ri-shopping-cart-2-fill hover:text-yellow-400 transition duration-300 font-bold"
                        ></i>
                    }

                    {isUserMenuOpen && (
                        <div
                            className="absolute right-0 top-12 bg-[#171717] shadow-lg rounded-md p-4 text-sm font-bold mt-1"
                            ref={userMenuRef}
                        >
                            {isLoggedIn ? (
                                <button
                                    onClick={handleLogout}
                                    className="text-white hover:text-yellow-400 transition duration-300"
                                >
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
