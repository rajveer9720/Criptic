import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Slick carousel default styles
import 'slick-carousel/slick/slick-theme.css'; // Slick carousel theme styles

const ImageCarousel: React.FC = () => {
  // Array of image URLs
  const images: string[] = [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
  ];

  // Slider settings configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: '-35px' }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className="w-3 h-3 bg-gray-300 rounded-full"
        style={{
          width: '10px',
          height: '10px',
        }}
      />
    ),
  };

  return (
    <div className="container mx-auto py-4">
      {/* Container with height set to 20% of viewport height */}
      <div className="relative w-full h-1/5">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[20rem] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
