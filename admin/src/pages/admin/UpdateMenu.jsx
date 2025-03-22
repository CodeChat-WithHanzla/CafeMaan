import React, { useContext, useState, useEffect } from 'react';
import { assets } from "../../assets/assets_admin/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

function UpdateMenu() {
    const { getMenuById, updateMenu } = useContext(AdminContext);
    const { id } = useParams();
    const [menuImg, setMenuImg] = useState(null);
    const [dealHeading, setDealHeading] = useState('');
    const [dealText, setDealText] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(1);
    const [loading, setLoading] = useState(false);
    const categories = [
        "Burgers", "Paratha", "Sandwich", "Pasta", "Crispy Special", "Shawarma", "Fries", "Pizza", "Regular", "Family"
    ];

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const menuData = await getMenuById(id);
                setDealHeading(menuData.DealHeading);
                setDealText(menuData.DealText);
                setPrice(menuData.Price);
                setCategory(menuData.Category);
                setRating(menuData.Rating);
                setMenuImg(menuData.imageUrl);
            } catch (error) {
                toast.error('Error fetching menu details');
            }
        };
        fetchMenu();
    }, [id, getMenuById]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (rating < 1 || rating > 5) {
                return toast.error('Rating should be between 1 and 5');
            }
            setLoading(true);
            const formData = new FormData();
            formData.append('DealHeading', dealHeading);
            formData.append('DealText', dealText);
            formData.append('Price', price);
            formData.append('Category', category);
            formData.append('Rating', rating);
            if (menuImg instanceof File) {
                formData.append('image', menuImg);
            }

            await updateMenu(id, formData);
        } catch (error) {
            toast.error('Error updating menu');
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <form className='w-full max-w-6xl mx-auto p-4 bg-[#121212] text-[#FCB116]' onSubmit={handleSubmit}>
            <p className='mb-3 text-lg font-semibold text-center sm:text-left'>Update Menu</p>
            <div className="bg-[#1A1A1A] p-8 border border-[#FCB116] rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
                <div className="flex items-center gap-4 mb-8 text-white">
                    <label htmlFor="menu-img">
                        <img
                            className='w-16 bg-gray-700 rounded-full cursor-pointer h-16 object-cover'
                            src={(menuImg && (menuImg instanceof File ? URL.createObjectURL(menuImg) : menuImg)) || assets.upload_area}
                            alt="Menu"
                        />
                    </label>
                    <input
                        onChange={(e) => setMenuImg(e.target.files[0])}
                        className='border rounded px-3 py-2 border-gray-300 focus:border-blue-600 focus:outline-none'
                        type="file" id='menu-img' hidden
                    />
                    <p>Update Menu Picture</p>
                </div>

                <div className="flex flex-col gap-4 text-white">
                    <div className="flex flex-col gap-1">
                        <p className='text-yellow'>Deal Heading</p>
                        <input
                            value={dealHeading}
                            onChange={(e) => setDealHeading(e.target.value)}
                            className='bg-[#222222] border border-[#FCB116] rounded px-3 py-2 text-white focus:outline-none'
                            type="text"
                            placeholder='Deal Heading' required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className='text-yellow'>Deal Text</p>
                        <textarea
                            value={dealText}
                            onChange={(e) => setDealText(e.target.value)}
                            className='bg-[#222222] border border-[#FCB116] rounded px-3 py-2 text-white focus:outline-none'
                            placeholder='Deal Description' rows={5} required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className='text-yellow'>Price</p>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className='bg-[#222222] border border-[#FCB116] rounded px-3 py-2 text-white focus:outline-none'
                            type="number"
                            placeholder='Enter Price' required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className='text-yellow'>Category</p>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-[#222222] border border-[#FCB116] rounded px-3 py-2 text-white focus:outline-none"
                            required
                        >
                            <option value="" disabled>
                                Select Category
                            </option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className='text-yellow'>Rating (1-5)</p>
                        <input
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className='bg-[#222222] border border-[#FCB116] rounded px-3 py-2 text-white focus:outline-none'
                            type="number"
                            min="1" max="5"
                            placeholder='Enter Rating' required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`bg-[#FCB116] text-black text-sm px-10 py-3 rounded-full mt-4 hover:bg-[#d99e0b] flex items-center justify-center gap-2 transition-all ${loading ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                >
                    {loading ? (
                        <>
                            <div className="animate-spin border-t-2 border-b-2 border-black rounded-full w-5 h-5"></div>
                            Updating...
                        </>
                    ) : (
                        "Update Menu"
                    )}
                </button>
            </div>
        </form>
    );
}

export default UpdateMenu;
