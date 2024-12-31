import React, { useState } from "react";

function Options({ value }) {
    const [isSelected, setIsSelected] = useState(false);

    const handleToggle = () => {
        
        setIsSelected((prev) => !prev);
    };

    return (
        <div className="space-y-4">
            <label
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleToggle}
            >
                
                <input
                    type="checkbox"
                    className="hidden"
                    checked={isSelected}
                    onChange={handleToggle} 
                />
                <div
                    className={`w-5 h-5 rounded-full border-2 ${isSelected ? "bg-[#FCB116] border-[#FCB116]" : "border-[#FCB116] bg-transparent"
                        } transition duration-200`}
                ></div>
                <span className="text-white">{value}</span>
            </label>
        </div>
    );
}

export default Options;
