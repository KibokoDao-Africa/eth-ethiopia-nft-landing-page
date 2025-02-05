import React from "react";
import "./Collection.css";

export default function Collection() {
  const collections = [
    {
      name: "By KIBOKO",
      username: "@kiboko",
      profileImg: require("../images/zimbabwe.png"),
      image1: require("../images/zambia.png"),
      image2: require("../images/south africa.png"),
      image3: require("../images/kenya.png"),
    },
    {
      name: "By KIBOKO",
      username: "@kiboko",
      profileImg: require("../images/Ghana.png"),
      image1: require("../images/Sierra.png"),
      image2: require("../images/Rwanda.png"),
      image3: require("../images/Nigeria.png"),
    },
    {
      name: "By KIBOKO",
      username: "@kiboko",
      profileImg: require("../images/Ghana.png"),
      image1: require("../images/Sierra.png"),
      image2: require("../images/Rwanda.png"),
      image3: require("../images/Nigeria.png"),
    },
  ];

  return (
    <section className="collection">
      <div className="container-fluid">
        <div className="row">
          <h1>
            COLLECTION<br></br>
            <span>BY kiboko</span>
          </h1>
        </div>
        <div className="row">
          {collections.map((collection, index) => (
            <div className="col-md-4" key={index}>
              <div className="collection-card">
                <div className="collection-card-header">
                  <img src={collection.profileImg} alt="Profile" />
                  <div className="collection-card-header-info">
                    <h3>{collection.name}</h3>
                    <p>{collection.username}</p>
                  </div>
                </div>
                <div className="collection-card-images">
                  <div className="collection-card-left-image">
                    <img src={collection.image1} alt="Image1" />
                  </div>
                  <div className="collection-card-right-images">
                    <img src={collection.image2} alt="Image2" />
                    <img src={collection.image3} alt="Image3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cta">
          <a
            href="https://rarible.com/kiboko"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
}
