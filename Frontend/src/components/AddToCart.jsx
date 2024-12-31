import React, { useState } from 'react';
import { useDispatch } from 'react-redux';  
import { addToCart } from '../slice/CartSlice';  
import { Rating } from 'flowbite-react';
import { AddToCartButton, AddOns, Options, DrinkSelector } from './index';
import { nanoid } from 'nanoid';

function AddToCart({ DealHeading, DealText, Price, imageUrl, rating, category }) {
    const id = nanoid()
    const dispatch = useDispatch();  
    const [selectedOption, setSelectedOption] = useState({ value: 'Select', label: 'Select' });
    const [quantity, setQuantity] = useState(1);
    const [selectedAddOns, setSelectedAddOns] = useState([]);

    const handleChange = (selected) => {
        setSelectedOption(selected);
    };

    const handleQuantityChange = (action) => {
        if (action === 'increase') {
            setQuantity((prevQuantity) => prevQuantity + 1);
        } else if (action === 'decrease' && quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleAddOnSelect = (addon) => {
        setSelectedAddOns((prevAddOns) => {
            if (prevAddOns.includes(addon)) {
                return prevAddOns.filter((item) => item !== addon);
            } else {
                return [...prevAddOns, addon];
            }
        });
    };

    const submitHandler = () => {
        const formData = {
            id,  
            DealHeading,
            DealText,
            Price,
            imageUrl,
            rating,
            category,
            selectedDrink: selectedOption.value,
            quantity,
            selectedAddOns
        };
        dispatch(addToCart(formData));         
    };

    return (
        <div className="bg-[#171717] p-10 text-white w-full space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <img
                    className="rounded-lg object-cover w-full h-96"
                    src={imageUrl}
                    alt={DealHeading}
                />
                <div className="flex flex-col space-y-4 w-full">
                    <h2 className="text-3xl font-bold">{DealHeading}</h2>
                    <p className="text-sm text-gray-400">{DealText}</p>
                    <p className="text-xl font-semibold">{Price}</p>
                    <Rating>
                        {[...Array(rating)].map((_, index) => (
                            <Rating.Star key={index} filled />
                        ))}
                    </Rating>
                    <p className="text-sm text-gray-400">
                        Category: <span className="font-semibold">{category}</span>
                    </p>

                    <form className="flex items-center gap-4">
                        <div className="mb-10">
                            <p className="text-lg font-medium">Drinks:</p>
                            <div className="flex sm:gap-4 flex-wrap gap-2 mt-4">
                                <Options value={'Pepsi'} handleSelect={handleAddOnSelect} />
                                <Options value={'Coca Cola'} handleSelect={handleAddOnSelect} />
                                <Options value={'Mirinda'} handleSelect={handleAddOnSelect} />
                                <Options value={'7up'} handleSelect={handleAddOnSelect} />
                            </div>

                            <DrinkSelector selectedOption={selectedOption} handleChange={handleChange} />
                        </div>
                    </form>

                    <div className="flex items-center gap-4">
                        <p className="text-lg font-medium">Quantity:</p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handleQuantityChange('decrease')}
                                className="px-4 py-2 bg-[#FCB116] hover:bg-[#661111] text-xl text-white rounded-lg"
                            >
                                -
                            </button>
                            <span className="text-xl font-semibold">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange('increase')}
                                className="px-4 py-2 bg-[#FCB116] hover:bg-[#661111] text-xl text-white rounded-lg"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <AddToCartButton handleCLick={submitHandler} />
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                    Add-ons <span className="text-sm font-medium text-gray-400">(Optional)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AddOns
                        src={'https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2Fmayo%2Bdip.webp&w=256&q=75'}
                        item={'Mayo Dip'}
                        price={'49'}
                        handleSelect={handleAddOnSelect}
                    />
                    <AddOns
                        src={'https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2Fpink%2Bsauce%2Bdip.webp&w=256&q=75'}
                        item={'Pink Sauce Dip'}
                        price={'59'}
                        handleSelect={handleAddOnSelect}
                    />
                    <AddOns
                        src={'https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2Fgarlic%2Bmayo%2Bdip.webp&w=256&q=75'}
                        item={'Garlic Mayo Dip'}
                        price={'66'}
                        handleSelect={handleAddOnSelect}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddToCart;
