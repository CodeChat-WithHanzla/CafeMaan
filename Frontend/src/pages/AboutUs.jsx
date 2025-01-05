import React from 'react'

function AboutUs() {
    return (
        <div className="bg-[#121212] min-h-screen flex flex-col px-6 md:px-16 lg:px-32 py-10 w-screen overflow-hidden">
            <h2 className='text-[#FCB116] text-2xl md:text-3xl font-bold'>OUR STORY</h2>
            <div className="text-white font-semibold text-lg md:text-xl mt-4 flex flex-col gap-5">
                <p>Welcome to CafeMaan, where every meal tells a story. Nestled in the heart of the city, we bring together the finest ingredients, a passion for food, and a love for creating unforgettable experiences. Whether you're grabbing a quick bite or enjoying a leisurely meal, we strive to offer more than just food—CafeMaan is a place where memories are made and shared.</p>
                <p>It all started with a dream to offer a space where great food, great company, and great vibes come together. From the first cup of coffee to the last bite of dessert, every dish at CafeMaan is made with love and care, crafted to satisfy your cravings and lift your spirits.</p>
            </div>
        </div>
    )
}

export default AboutUs
