import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="bg-[#121212] flex flex-col items-center justify-center h-screen text-center p-4">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl mt-2 text-white">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
                Go to Home
            </Link>
        </div>
    );
}

export default NotFound;
