import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import one from "../../../assets/Carrusel/1.jpeg";
import two from "../../../assets/Carrusel/2.jpeg";
import three from "../../../assets/Carrusel/3.jpeg";
import four from "../../../assets/Carrusel/4.jpeg";
import five from "../../../assets/Carrusel/5.jpeg";

const MySplideCarousel = () => {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 2,
        perMove: 1,
        focus: 'center',
        padding: '2rem',
        breakpoints: {
          768: {
            perPage: 1,
            padding: '1rem'
          }
        }
      }}
    >
      <SplideSlide>
        <div className="bg-gray-200 p-4 rounded-md">
          <img src={one} alt="one" />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-gray-200 p-4 rounded-md">
          <img src={two} alt="two" />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-gray-200 p-4 rounded-md">
          <img src={three} alt="three" />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-gray-200 p-4 rounded-md">
          <img src={four} alt="four" />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-gray-200 p-4 rounded-md">
          <img src={five} alt="five" />
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default MySplideCarousel;