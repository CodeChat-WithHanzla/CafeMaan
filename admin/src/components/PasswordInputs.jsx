import React, { useState } from 'react';
import { nanoid } from 'nanoid';
function PasswordInputs({ label, value, setValue, autoComplete }) {
    const [showPassword, setShowPassword] = useState(false);
    const id = nanoid();
    return (
        <div className="w-full flex flex-col">
            <label className="text-[#e0dcdc] leading-[1.8rem] lg:text-[16px] text-[18px] font-semibold mb-[1rem]" htmlFor={id}>
                {label}
            </label>
            <div className="relative">
                <input
                    className="border-[#FCB116] rounded-[0.25rem] text-[1rem] placeholder-white text-[#FCB116] w-full outline-none h-[3.75rem] p-[1rem] bg-[rgb(38,38,38)]"
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    id={id}
                    name="password"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    autoComplete={autoComplete}
                />
                <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#FCB116] cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <i className="ri-eye-off-line"></i> : <i className="ri-eye-fill"></i>}
                </button>
            </div>
        </div>
    );
}

export default PasswordInputs;
