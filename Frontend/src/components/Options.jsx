import React from "react";

function Options({ value, setSelectedDrink, selectedDrink }) {
    const isSelected = selectedDrink === value;

    const handleToggle = () => {
        // Toggle between selecting and unselecting the drink
        if (isSelected) {
            setSelectedDrink(null); // Unselect the drink if it is selected
        } else {
            setSelectedDrink(value); // Set selected drink to the clicked value
        }
    };

    return (
        <div className="space-y-4">
            <label
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleToggle}
            >
                <div
                    className={`w-5 h-5 rounded-full border-2 ${isSelected
                        ? "bg-[#FCB116] border-[#FCB116]" 
                        : "border-[#FCB116] bg-transparent"
                        } transition duration-200`}
                ></div>
                <span className="text-white">{value}</span>
            </label>
        </div>
    );
}

export default Options;
