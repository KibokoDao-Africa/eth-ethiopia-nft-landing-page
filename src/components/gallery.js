import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import kenya from "../images/kenya.png";
import uganda from "../images/Uganda.png";
import nigeria from "../images/Nigeria.png";
import angola from "../images/angola.png";
import ethiopia from "../images/Ethiopia.png";

export default function FullScreenCarousel() {
   const settings = {
     dots: false, // Removes the navigation dots
     arrows: false, // Removes the next/previous arrows
     infinite: true, // Infinite scrolling
     speed: 2000, // Animation speed
     autoplay: true, // Enable autoplay
     autoplaySpeed: 0, // For continuous movement
     cssEase: "linear", // Smooth continuous motion
     slidesToShow: 5, // Number of images visible (default)
     slidesToScroll: 1, // Images to scroll at a time
     pauseOnHover: false, // Disable pause on hover
     responsive: [
       {
         breakpoint: 1024, // For screens below 1024px
         settings: {
           slidesToShow: 4, // Show 4 slides
         },
       },
       {
         breakpoint: 768, // For screens below 768px
         settings: {
           slidesToShow: 3, // Show 3 slides
         },
       },
       {
         breakpoint: 480, // For screens below 480px
         settings: {
           slidesToShow: 2, // Show 2 slides
         },
       },
     ],
   };


  const images = [
    { src: kenya, alt: "Kenya" },
    { src: uganda, alt: "Uganda" },
    { src: nigeria, alt: "Nigeria" },
    { src: angola, alt: "Angola" },
    { src: ethiopia, alt: "Ethiopia" },
  ];

  return (
    <div className="container-fluid bg-none py-3 mt-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="d-flex justify-content-center align-items-center mx-auto"
          >
            <a
              href="https://rarible.com/kiboko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="m-4 px-2"
                style={{
                  width: "12rem",
                  height: "12rem",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
