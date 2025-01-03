import React from 'react';

function AddOns({ src, item, price, handleSelect, selectedAddOns }) {
    const isSelected = selectedAddOns?.some((addon) => addon.name === item); // Check by name

    const handleClick = () => {
        handleSelect({ name: item, price }); // Pass both name and price
    };

    return (
        <div className="flex items-center justify-between p-4 rounded-lg" onClick={handleClick}>
            <div className="flex items-center gap-4">
                <img
                    className="w-16 h-16 object-cover rounded-lg"
                    src={src}
                    alt={item}
                />
                <div>
                    <p className="text-lg font-medium">{item}</p>
                    <p className="text-sm text-gray-400">Rs. {price}</p>
                </div>
            </div>

            {!isSelected ? (
                <button className="px-4 py-2 bg-[#FCB116] hover:bg-[#661111] text-white rounded-lg text-xl text-center">
                    +
                </button>
            ) : (
                <button className="px-4 py-2 bg-[#661111] hover:bg-[#FCB116] text-white rounded-lg text-xl text-center">
                    -
                </button>
            )}
        </div>
    );
}

export default AddOns;
