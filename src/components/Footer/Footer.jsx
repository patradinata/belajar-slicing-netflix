import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ol>
        <li>Audio description</li>
        <li>Help centre</li>
        <li>gift cards</li>
        <li>media centre</li>
        <li>investor relations</li>
        <li>Jobs</li>
        <li>Term of use</li>
        <li>privacy</li>
        <li>Legal Notices</li>
        <li>Cookie preferences</li>
        <li>Corporate information</li>
        <li>Contact Us</li>
      </ol>
      <p className="copyright-text">Netflix, Inc. © 2022</p>
    </div>
  );
};

export default Footer;
