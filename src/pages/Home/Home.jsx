import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "/public/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="banner img" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="caption" className="caption-img" />
          <p>Watch TV Shows, Movies, Originals, and more.</p>
          <div className="hero-btn">
            <button className="btn">
              <img src={play_icon} alt="" />
              play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              more-info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>

      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on netflix"} />
        <TitleCards title={"upComing"} />
        <TitleCards title={"Top pics for you"} />
      </div>
    </div>
  );
};

export default Home;
