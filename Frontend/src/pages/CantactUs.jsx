import React, { useState } from 'react';
import "remixicon/fonts/remixicon.css";
const ContactUs = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedMessage = `Name: ${name}%0AMessage: ${message}`;
        const whatsappURL = `https://wa.me/+923254615798?text=${formattedMessage}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center overflow-hidden w-screen">
            <div className="bg-[#1f1f1f] p-10 rounded-lg shadow-lg w-full max-w-lg ">
                <h2 className="text-2xl font-bold mb-5 text-[#FCB116]">Contact Us</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 text-[#FCB116]" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border hover:border-[#FCB116] bg-[#2a2a2a] text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FCB116]"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-[#FCB116]" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full border hover:border-[#FCB116] bg-[#2a2a2a] text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FCB116]"
                            placeholder="Your Message"
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full sm:font-bold sm:text-lg bg-[#FCB116] text-white hover:text-black p-2 rounded hover:bg-[#f0a700] transition duration-200"
                    >
                        Send Message On <i className="ml-2 text-green-600 text-2xl ri-whatsapp-line"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
