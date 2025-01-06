import React from "react";

function MapEmbed() {
    return (
        <div className="relative text-right w-full max-w-[700px] mx-auto">
            <div className="overflow-hidden bg-none w-full aspect-video">
                <iframe
                    className="w-full h-full"
                    src="https://maps.google.com/maps?q=31.07778,74.49075&z=14&output=embed"
                    title="Google Map"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default MapEmbed;
