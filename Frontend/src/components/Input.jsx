import React from 'react';
import { nanoid } from 'nanoid';
function Input({ value, setValue, label, placeholder, type = 'text', autoComplete = 'off' }) {
    const id = nanoid();
    return (
        <div className="w-full flex flex-col">
            <label
                className="text-[#e0dcdc] leading-[1.8rem] text-[16px] sm:text-[18px] font-semibold mb-[0.75rem]"
                htmlFor={label}
            >
                {label}
            </label>
            <input
                className="border-[#FCB116] rounded-[0.25rem] text-[1rem] placeholder-white text-[#FCB116] w-full outline-none h-[3.75rem] p-[1rem] bg-[rgb(38,38,38)] focus:ring-2 focus:ring-[#FCB116] transition-all duration-300 ease-in-out"
                placeholder={placeholder}
                type={type}
                id={id}
                name={label}
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
                autoComplete={autoComplete}
            />
        </div>
    );
}

export default Input;
