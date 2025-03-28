import React from 'react'

function AboutUs() {
    return (
        <div className="mt-32 bg-[#121212] min-h-screen flex flex-col px-6 md:px-16 lg:px-32 py-10 w-screen overflow-hidden">
            <h2 className='text-[#FCB116] text-2xl md:text-3xl font-bold'>OUR STORY</h2>
            <div className="text-white font-semibold text-lg md:text-xl mt-4 flex flex-col gap-5">
                <p>At CafeMaan, we believe food is more than just sustenance—it's an experience, a journey, and a celebration of flavors. Nestled in the heart of the city, our café is a haven for those who appreciate the art of good food, warm hospitality, and an inviting atmosphere. Whether you're stopping by for a morning coffee or an evening indulgence, we promise a moment of comfort and delight in every bite.</p>

                <p>Our story began with a simple yet profound dream—to create a space where food lovers could come together, share laughter, and make memories. From the aroma of freshly brewed coffee to the carefully curated menu that blends tradition with innovation, every aspect of CafeMaan is designed to inspire and satisfy. We take pride in sourcing the finest ingredients and preparing each dish with love, ensuring an unforgettable dining experience.</p>

                <div className="hidden md:block space-y-6">
                    <p>Beyond serving great food, CafeMaan is built on the foundation of community. We strive to be more than just a café—we want to be your go-to spot for meaningful conversations, creative inspiration, and moments of relaxation. Our cozy ambiance, coupled with a commitment to excellence, makes every visit a special one.</p>

                    <p>We are passionate about sustainability and ethical sourcing. From farm-fresh produce to ethically sourced coffee beans, we ensure that our offerings support both quality and responsibility. Every sip and every bite at CafeMaan carries the essence of authenticity, freshness, and care.</p>

                    <p>Whether you're here for a quick break, a long overdue catch-up with friends, or an evening of self-care, CafeMaan welcomes you with open arms. Let us be a part of your story, one meal at a time.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
