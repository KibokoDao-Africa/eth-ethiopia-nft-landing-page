import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import './Hero.css';
import SimpleSlider from './gallery';

export default function Hero() {


  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="content">
          <h1>
            collect & sell
            <br />
            <span>kiboko rare nfts</span>
          </h1>
          <div className="cta">
            <a
              href="https://rarible.com/kiboko"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </div>
          <div className="container">
<SimpleSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
