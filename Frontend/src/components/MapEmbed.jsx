import React from "react";

function MapEmbed() {
    return (
        <div className="relative text-right w-[50%] h-[400px]">
            <div className="overflow-hidden bg-none w-full h-[400px]">
                <iframe
                    className="w-full h-[400px]"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=maan village district kasur&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
}

export default MapEmbed;
