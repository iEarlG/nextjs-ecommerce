import React from 'react';

import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 EFLV PC Store. All right reserved</p>
      <p className="icons">
        <a href="https://twitter.com/itseaaarloffcl" target="_blank">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.youtube.com/@iearlg" target="_blank">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com/itsmearlofficial/" target="_blank">
          <AiFillInstagram />
        </a>
      </p>
    </div>
  );
}

export default Footer;