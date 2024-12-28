import React from 'react';
import { Carousel } from 'flowbite-react';

function CarouselComponent() {
    const images = [
        "https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fapp-banners%2Fdelivering%2Bhappiness%2B1920x650.webp&w=1920&q=75",
        "https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fapp-banners%2Ffast%2Bfood%2Bbrand%2B1920x650.webp&w=1920&q=75",
        "https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fapp-banners%2Ffast%2Bfood%2Bbrand%2B1920x650.webp&w=1920&q=75"
    ];

    return (
        <div className='w-full flex justify-center'>
            <Carousel className="w-[90%] max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] mt-10 mx-4 mb-5">
                {images.map((img, index) => (
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
