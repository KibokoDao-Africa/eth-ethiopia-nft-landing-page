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
            <h1 style={{fontSize:"2rem"}} className='font'>link to bridge assets to lisk </h1>

            <br />
            <span>
              <div className="cta">
                <a
                  href="https://relay.link/bridge/lisk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lisk Bridge
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
