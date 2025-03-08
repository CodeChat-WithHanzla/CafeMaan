import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { useNavigate } from 'react-router';

function AllMenus() {
    const { aToken, menus, getAllMenus, deleteMenu } = useContext(AdminContext);
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        await deleteMenu(id);
        getAllMenus();
    };

    useEffect(() => {
        if (aToken) {
            getAllMenus();
        } else {
            navigate('/');
        }
    }, [aToken]);

    return (
        <div className="w-full max-w-6xl mx-auto p-4 bg-[#121212] text-[#FCB116] mt-5">
            <p className="mb-3 text-lg font-semibold text-center sm:text-left">All Menus</p>
            <div className="bg-[#1E1E1E] border border-[#FCB116] rounded-lg text-sm max-h-[80vh] overflow-y-auto">
                {/* Header */}
                <div className="hidden sm:grid grid-cols-[0.5fr_3fr_3fr_1fr_1fr_1fr_2fr] py-3 px-6 border-b border-[#FCB116] bg-[#232323] text-white">
                    <p>#</p>
                    <p>Deal Heading</p>
                    <p>Deal Description</p>
                    <p>Category</p>
                    <p>Price</p>
                    <p>Rating</p>
                    <p>Actions</p>
                </div>

                {/* Data */}
                {menus.length > 0 ? (
                    menus.map((menu, index) => (
                        <div key={menu._id} className="p-4 border-b border-[#FCB116] hover:bg-[#333] text-white">
                            {/* Grid for Large Screens */}
                            <div className="hidden sm:grid sm:grid-cols-[0.5fr_3fr_3fr_1fr_1fr_1fr_2fr] items-center">
                                <p>{index + 1}</p>
                                <p>{menu.DealHeading}</p>
                                <p className="truncate">{menu.DealText}</p>
                                <p>{menu.Category}</p>
                                <p>Rs.{menu.Price}</p>
                                <p>{menu.Rating} ⭐</p>
                                <div className="flex gap-4">
                                    <button
                                        className="text-blue-400 hover:text-blue-600 text-lg"
                                        onClick={() => navigate(`/update-menu/${menu._id}`)}
                                    >
                                        <i className="ri-edit-2-line"></i>
                                    </button>
                                    <button
                                        className="text-red-400 hover:text-red-600 text-lg"
                                        onClick={() => handleDelete(menu._id)}
                                    >
                                        <i className="ri-delete-bin-6-line"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Stacked Layout for Small Screens */}
                            <div className="sm:hidden flex flex-col gap-2">
                                <p className="font-semibold">{menu.DealHeading}</p>
                                <p className="text-gray-300">{menu.DealText}</p>
                                <p className="text-gray-400 text-sm">Category: {menu.Category}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium">Rs.{menu.Price}</p>
                                    <p className="text-sm">{menu.Rating} ⭐</p>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="text-blue-400 hover:text-blue-600 text-lg"
                                        onClick={() => navigate(`/update-menu/${menu._id}`)}
                                    >
                                        <i className="ri-edit-2-line"></i>
                                    </button>
                                    <button
                                        className="text-red-400 hover:text-red-600 text-lg"
                                        onClick={() => handleDelete(menu._id)}
                                    >
                                        <i className="ri-delete-bin-6-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-400 py-6">No menus available</p>
                )}
            </div>
        </div>
    );
}

export default AllMenus;
