import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router';

function NavBar() {
    const { aToken, setAToken } = useContext(AdminContext);
    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
        if (aToken) {
            localStorage.removeItem('aToken');
            setAToken('');
        }
    };

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b border-[#FCB116] bg-[#121212] text-[#FCB116]'>
            <div className="flex items-center gap-2 text-xs">
                <img className='sm:w-20 w-7 cursor-pointer'
                    src='https://res.cloudinary.com/dwlbprnr5/image/upload/v1735671465/Asset_4_ucj8qd.png'
                    alt="Admin Logo"
                />
                <p className='border px-2.5 py-0.5 rounded-full border-[#FCB116] text-white'>Admin</p>
            </div>
            <button
                onClick={logout}
                className='bg-[#FCB116] text-[#121212] text-sm px-10 py-2 rounded-full'>
                Logout
            </button>
        </div>
    );
}

export default NavBar;
