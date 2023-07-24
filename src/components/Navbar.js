import React from 'react';
import './Navbar.css'; // Make sure to create the corresponding CSS file
import { LoginModal } from '../components/LoginModal';
import { useState } from 'react';


const Navbar = () => {

const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
  return (
    <>
    <LoginModal showModal={showModal} setShowModal={setShowModal}/>
    <nav className="fill">
      <ul className="navbar-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#help">Help</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
      <button className="get-started-btn" onClick={openModal}>Get Started</button>
    </nav>
    </>
  );
};

export default Navbar;
