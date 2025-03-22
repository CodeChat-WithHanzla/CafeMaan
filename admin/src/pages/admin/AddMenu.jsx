import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets_admin/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";

function AddMenu() {
    const [menuImg, setMenuImg] = useState(false);
    const [dealHeading, setDealHeading] = useState("");
    const [dealText, setDealText] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState(1);
    const [loading, setLoading] = useState(false);
    const { addMenu } = useContext(AdminContext);

    const categories = [
        "Burgers", "Paratha", "Sandwich", "Pasta", "Crispy Special",
        "Shawarma", "Fries", "Pizza", "Regular", "Family"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!menuImg) return toast.error("Please Upload Menu Image");
            if (rating < 1 || rating > 5) return toast.error("Rating should be between 1 and 5");
            setLoading(true);
            const formData = new FormData();
            formData.append("DealHeading", dealHeading);
            formData.append("DealText", dealText);
            formData.append("Price", price);
            formData.append("Category", category);
            formData.append("Rating", rating);
            formData.append("image", menuImg);

            await addMenu(formData);
            setMenuImg(false);
            setDealHeading("");
            setDealText("");
            setPrice("");
            setCategory("");
            setRating(1);
        } catch (error) {
            toast.error("Error During Adding Menu");
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <form className="w-full max-w-6xl mx-auto p-4 bg-[#121212] text-[#FCB116] mt-5" onSubmit={handleSubmit}>
            <p className="mb-3 text-lg font-semibold text-center sm:text-left">Add Menu</p>
            <div className="bg-[#1A1A1A] p-8 border border-[#FCB116] rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
                <div className="flex items-center gap-4 mb-8 text-white">
                    <label htmlFor="menu-img">
                        <img
                            className="w-16 bg-gray-700 rounded-full cursor-pointer h-16 object-cover"
                            src={(menuImg && URL.createObjectURL(menuImg)) || assets.upload_area}
                            alt=""
                        />
                    </label>
                    <input
                        onChange={(e) => setMenuImg(e.target.files[0])}
                        className="hidden"
                        type="file"
                        id="menu-img"
                    />
                    <p>Upload Menu Picture</p>
                </div>

                <div className="flex flex-col gap-4 text-white">
                    {[{ label: "Deal Heading", state: dealHeading, setState: setDealHeading, type: "text" },
                    { label: "Deal Text", state: dealText, setState: setDealText, type: "textarea" },
                    { label: "Price", state: price, setState: setPrice, type: "number" },
                    { label: "Rating (1-5)", state: rating, setState: setRating, type: "number", min: 1, max: 5 }
                    ].map(({ label, state, setState, type, min, max }, index) => (
                        <div key={index} className="flex flex-col gap-1">
                            <p>{label}</p>
                            {type === "textarea" ? (
                                <textarea
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="bg-[#222222] border border-[#FCB116] rounded px-3 py-2 text-white focus:outline-none"
                                    rows={5}
                                    required
                                />
                            ) : (
                                <input
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="bg-[#222222] border border-[#FCB116] rounded px-3 py-2 text-white focus:outline-none"
                                    type={type}
                                    min={min}
                                    max={max}
                                    required
                                />
                            )}
                        </div>
                    ))}
                    <div className="flex flex-col gap-1">
                        <p>Category</p>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-[#222222] border border-[#FCB116] rounded px-3 py-2 text-white focus:outline-none"
                            required
                        >
                            <option value="" disabled>Select Category</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat} className="bg-[#121212]">{cat}</option>
                            ))}
                        </select>
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
                            Adding...
                        </>
                    ) : (
                        "Add Menu"
                    )}
                </button>
            </div>
        </form>
    );
}

export default AddMenu;
