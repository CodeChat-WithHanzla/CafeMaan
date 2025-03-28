import React from 'react';
import { Carousel } from 'flowbite-react';
import { carousel } from "../assets/cafemaan/index"

function CarouselComponent() {
    return (
        <div className='w-screen'>
            <Carousel className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px]">
                {carousel.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`carousel-image-${index}`}
                        className="w-full h-full object-cover"
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselComponent;