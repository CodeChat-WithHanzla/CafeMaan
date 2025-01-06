import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/CartSlice';
import { Rating } from 'flowbite-react';
import { AddToCartButton, AddOns, Options, DrinkSelectorSize } from './index';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

function AddToCart({ setShowCart, DealHeading, DealText, Price, imageUrl, rating, category, position }) {
    const basePrice = Price;
    const id = nanoid();
    const [price, setPrice] = useState(Price);
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [selectedDrink, setSelectedDrink] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        setPrice(Price);
        if (position) {
            setIsVisible(true);
        }
    }, [Price, position]);

    const handleChange = (selected) => {
        setSelectedOption(selected);
    };

    const handleQuantityChange = (action) => {
        setQuantity((prevQuantity) => {
            let newQuantity;

            if (action === 'increase') {
                newQuantity = prevQuantity + 1;
            } else if (action === 'decrease' && prevQuantity > 1) {
                newQuantity = prevQuantity - 1;
            } else {
                newQuantity = prevQuantity;
            }

            const addOnsTotal = selectedAddOns.reduce((total, addOn) => total + addOn.price, 0);
            setPrice(basePrice * newQuantity + addOnsTotal);

            return newQuantity;
        });
    };

    const handleAddOnSelect = (addon) => {
        setSelectedAddOns((prevAddOns) => {
            let newAddOns;
            if (prevAddOns.some((item) => item.name === addon.name)) {
                newAddOns = prevAddOns.filter((item) => item.name !== addon.name);
            } else {
                newAddOns = [...prevAddOns, addon];
            }
            const addOnsTotal = newAddOns.reduce((total, addOn) => total + addOn.price, 0);
            setPrice(basePrice * quantity + addOnsTotal);

            return newAddOns;
        });
    };

    const submitHandler = () => {
        const newFormData = {};
        if (id) newFormData.id = id;
        if (DealHeading) newFormData.DealHeading = DealHeading;
        if (DealText) newFormData.DealText = DealText;
        if (price) newFormData.Price = price;
        if (imageUrl) newFormData.imageUrl = imageUrl;
        if (rating) newFormData.rating = rating;
        if (category) newFormData.category = category;
        if (selectedDrink) newFormData.selectedDrink = selectedDrink;
        if (selectedOption?.value) newFormData.selectedDrinkSize = selectedOption.value;
        if (quantity) newFormData.quantity = quantity;
        if (selectedAddOns.length > 0) newFormData.selectedAddOns = selectedAddOns;

        
        setShowCart(false)
        dispatch(addToCart(newFormData));
        navigate('/pay')

    };


    return (
        <div
            className="bg-[#171717] p-10 text-white w-full space-y-8 relative max-h-[600px] overflow-y-scroll scrollbar-thin scrollbar-thumb-scrollbarYellow scrollbar-track-transparent scrollbar-thumb-rounded-scroll-thumb pr-5"
            style={{
                position: isVisible ? 'absolute' : 'fixed',
                top: position ? position.top : 'auto',
                left: position ? position.left : 'auto',
                zIndex: isVisible ? 9999 : 1,
            }}
        >
            <button
                className="text-yellow-400 hover:text-white text-2xl transition duration-300 absolute right-5 sm:top-10 top-5"
                onClick={() => setShowCart(false)}
            >
                ✕
            </button>
            <div className="flex flex-col lg:flex-row gap-8">
                <img
                    className="rounded-lg object-cover w-full h-96"
                    src={imageUrl}
                    alt={DealHeading}
                />
                <div className="flex flex-col space-y-4 w-full">
                    <h2 className="text-3xl font-bold">{DealHeading}</h2>
                    <p className="text-sm text-gray-400">{DealText}</p>
                    <p className="text-xl font-semibold">Rs. {price}</p>
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
                                <Options value={'Pepsi'} selectedDrink={selectedDrink} setSelectedDrink={setSelectedDrink} />
                                <Options value={'Coca Cola'} selectedDrink={selectedDrink} setSelectedDrink={setSelectedDrink} />
                                <Options value={'Mirinda'} selectedDrink={selectedDrink} setSelectedDrink={setSelectedDrink} />
                                <Options value={'7up'} selectedDrink={selectedDrink} setSelectedDrink={setSelectedDrink} />
                            </div>

                            {selectedDrink && <DrinkSelectorSize selectedOption={selectedOption} handleChange={handleChange} />}
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
                        price={49}
                        handleSelect={handleAddOnSelect}
                        selectedAddOns={selectedAddOns}
                    />
                    <AddOns
                        src={'https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2Fpink%2Bsauce%2Bdip.webp&w=256&q=75'}
                        item={'Pink Sauce Dip'}
                        price={59}
                        handleSelect={handleAddOnSelect}
                        selectedAddOns={selectedAddOns}
                    />
                    <AddOns
                        src={'https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2Fgarlic%2Bmayo%2Bdip.webp&w=256&q=75'}
                        item={'Garlic Mayo Dip'}
                        price={66}
                        handleSelect={handleAddOnSelect}
                        selectedAddOns={selectedAddOns}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddToCart;
