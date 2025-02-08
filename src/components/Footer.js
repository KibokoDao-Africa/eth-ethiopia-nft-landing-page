import React from "react";
import "./Footer.css";

// Social link component
const SocialLink = ({ href, iconClass }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  </li>
);



// Array of social links
const socialLinks = [
  {
    href: " https://x.com/KibokoDAO?t=qcfl5HVEXoSUQVkBQM3KLQ&s=09",
    iconClass: "bi bi-twitter",
  },
  { href: "https://discord.gg/cg48CzbsXq", iconClass: "bi bi-discord" },
  {
    href: "https://www.instagram.com/kiboko_dao",
    iconClass: "bi bi-instagram",
  },
  {
    href: "https://web.facebook.com/profile.php?id=100093844284426",
    iconClass: "bi bi-facebook",
  },
  {
    href: "https://www.youtube.com/@KibokoDAOAfrica",
    iconClass: "bi bi-youtube",
  },
];



const year = new Date().getFullYear();

export default function Footer() {
  return (
    <section className="Footer">
      <div className="container">
        <div className="row">
          <div className="join-us">
            <p className="subtitle">
              Invest in our NFTs, get voting, proposing and access rights all in one place.
            </p>

          </div>

          <ul className="social-links">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.href}
                iconClass={link.iconClass}
              />
            ))}
          </ul>

         

          <p className="copy">© {year} KIBOKO DAO All rights reserved.</p>
          <p className="credit">
            Design by
            <a
              href="https://github.com/eddiemetrium"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingLeft: "2px" }}
            >
              eddiemetrium
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
