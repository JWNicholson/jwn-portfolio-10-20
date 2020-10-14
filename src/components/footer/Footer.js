import React from 'react';
import SocialLinks from '../socialLinks/SocialLinks';
import { FaArrowCircleUp } from 'react-icons/fa';


import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <SocialLinks />
            <a href="#top" className="to-top-arrow"><FaArrowCircleUp /></a>
        </footer>
    )
}

export default Footer;
