import React from 'react';
import TopNavbar from '../Navigation/TopNavbar';
import SocialLinks from '../socialLinks/SocialLinks';
import profilepic from '../../assets/images/jwn_profile-2-420px.jpg';


import './Header.css';

const Header = () => {
  return (
    <>
      <TopNavbar />
      <header id="top" className="header app__header">
        <div className="hero__wrapper">
          <div className="column-left">
            <span className="column-left__brand">
              <h1>John Nicholson<br />
                <span className="jobTitle">Full Stack Engineer</span></h1>
            </span>
            <SocialLinks />
            <p>
              I specialize in React, Express, Node, Redux, Python, and SQL, but can learn any language.<br />
              I also have skills in Visual Design, and WordPress development. Creating things that
              are useful and nice to look at is what drives me.<br /> I've even built a couple of unpublished, small Android apps.
          </p>
            <p>I'm looking for fulltime work, but will also consider a part-time or contract gig.
        </p>
          </div>

          <div className="column-right">
            <img src={profilepic} alt="John Nicholson profile" className="profile-img" />
          </div>

        </div>
      </header>

    </>
  )
}

export default Header;
