import React, { useState } from 'react';
import { LoginModal } from '../components/LoginModal';
import styled from 'styled-components';
import '../components/style.css';
import Navbar from '../components/Navbar';
import GradientBox from '../components/GradientBox';
import Footer from '../components/Footer';
const Contiainer = styled.div`
    display: flex;
`;

function LandingPage()
{
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return(
        <div className='main'>
        <div>
            <LoginModal showModal={showModal} setShowModal={setShowModal}/> 
            <Navbar></Navbar>
            <GradientBox></GradientBox>
            <Footer></Footer>
        </div>
        </div>
    );
};


export default LandingPage;