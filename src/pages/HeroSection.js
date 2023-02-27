import React from "react";
import "../App.css";
import logo from "../assests/logo.jpg";
import apk from "../assests/hdoc.apk";

const HeroSection = () => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container-fluid ">
          <a className="navbar-brand logo_text" href="#">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top logo"
            />
            HDOC
          </a>
        </div>
      </nav>
      <div className="hero_section">
      <div className="center">
          <iframe
            width="200"
            height="450"
            className="video2"
            src="https://www.youtube.com/embed/SOMtBLFMrt8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboardWrite; encryptedMedia; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          
        </div>
        <div className="hero_section_text">
          <h1 className="hero_section_h1">Hundred Days Of Code</h1>
          <h5 className="hero_section_h5">
            Code every day, improve every way!
          </h5>
          <div>
            <a href={apk} download="hdoc">
              <button className="download center">
                <img
                  src={logo}
                  alt=""
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top logo"
                />
                Download
              </button>
            </a>
          </div>
        </div>
        <div>
          <iframe
            width="200"
            height="450"
            className="video"
            src="https://www.youtube.com/embed/SOMtBLFMrt8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboardWrite; encryptedMedia; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
