import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center p-5">
            <div className="bg-[#1f1f1f] p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-5 text-[#FCB116]">Contact Us</h2>
                <form className="space-y-5">
                    <div>
                        <label className="block mb-1 text-[#FCB116]" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border hover:border-[#FCB116] bg-[#2a2a2a] text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FCB116]"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-[#FCB116]" htmlFor="number">Mobile Number</label>
                        <input
                            type="tel"
                            id="number"
                            className="w-full border hover:border-[#FCB116] bg-[#2a2a2a] text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FCB116]"
                            placeholder="Your Number"
                        />

                    </div>
                    <div>
                        <label className="block mb-1 text-[#FCB116]" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full border hover:border-[#FCB116] bg-[#2a2a2a] text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FCB116]"
                            placeholder="Your Message"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full sm:font-bold sm:text-lg bg-[#FCB116] text-white hover:text-black p-2 rounded hover:bg-[#f0a700] transition duration-200"
                    >
                        Send Message On WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
