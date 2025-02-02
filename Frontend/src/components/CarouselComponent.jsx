import React from 'react';
import { Carousel } from 'flowbite-react';
import { carousel } from "../assets/cafemaan/index"
function CarouselComponent() {
    return (
        <div className='w-full flex justify-center'>
            <Carousel className="w-[90%] max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] mt-10 mx-4 mb-5">
                {carousel.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`carousel-image-${index}`}
                        className="h-full w-full object-cover"
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselComponent;
