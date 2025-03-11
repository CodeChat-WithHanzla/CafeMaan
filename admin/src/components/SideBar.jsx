import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router';

function SideBar() {
    const { aToken } = useContext(AdminContext);

    return (
        <div className='min-h-screen bg-[#1A1A1A] border-r border border-[#1A1A1A]'>
            {aToken && (
                <ul className='text-[#515151] mt-5'>
                    <NavLink className={({ isActive }) =>
                        `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-[#FCB116] text-[#515151]" : "text-white"}`
                    } to='/admin-menus'>
                        <i className="ri-menu-line text-xl"></i>
                        <p className='hidden md:block'>All Menus</p>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-[#FCB116] text-[#515151]" : "text-white"}`
                    } to='/add-menu'>
                        <i className="ri-add-circle-line text-xl"></i>
                        <p className='hidden md:block'>Add Menu</p>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-[#FCB116] text-[#515151]" : "text-white"}`
                    } to='/admin-orders'>
                        <i className="ri-shopping-bag-line"></i>
                        <p className='hidden md:block'>All Orders</p>
                    </NavLink>
                </ul>
            )}
        </div>
    );
}

export default SideBar;
