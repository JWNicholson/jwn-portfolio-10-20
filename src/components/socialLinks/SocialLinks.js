import React from 'react';
import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa'

import './SocialLinks.css';

const SocialLinks = () => {
    return (
        <div className="links__social">
        <ul className="links__social-list">
          <li className="links__social-list--item"><a href="https://github.com/JWNicholson"><FaGithub /></a></li>
          <li className="links__social-list--item"><a href="https://www.linkedin.com/in/jnicholson812/"><FaLinkedin /></a></li>
          <li className="links__social-list--item"><a href="mailto:john.nicholson812@gmail.com"><FaEnvelope /></a></li>
        </ul>
      </div>
    )
}

export default SocialLinks;
