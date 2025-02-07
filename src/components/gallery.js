import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

// Importing images
import kenya from "../images/kenya.png";
import uganda from "../images/Uganda.png";
import nigeria from "../images/Nigeria.png";
import angola from "../images/angola.png";
import ethiopia from "../images/Ethiopia.png";

export default function FullScreenCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
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
    <div className="carousel-container" style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <a
              href="https://rarible.com/kiboko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "200px",
                  maxHeight: "200px",
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
