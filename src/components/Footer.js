import React from 'react';
import './Footer.css'; // Make sure to create the corresponding CSS file
import { LoginModal } from '../components/LoginModal';
import { useState } from 'react';


const Footer = () => {
  return (
    <>
    <nav className="fill1">
      <ul className="Footer-links">
        <li><a href="#about">Phone: 678-999-8212</a></li>
        <li><a href="#help">Email: Urmom@gmail.com</a></li>
        <li><a href="#services">orlando, FL</a></li>
      </ul>
      {/* <button className="get-started-btn" >Get Started</button> */}
    </nav>
    </>
  );
};

export default Footer;
