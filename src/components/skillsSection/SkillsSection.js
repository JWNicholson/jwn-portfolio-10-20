import React from 'react';
import html5 from '../../assets/images/Skills_Icons/html5.png'
import css3 from '../../assets/images/Skills_Icons/css3.png'
import js from '../../assets/images/Skills_Icons/js.png'
import wp from '../../assets/images/Skills_Icons/wordpress.png';
import redux from '../../assets/images/Skills_Icons/redux.png';
import react from '../../assets/images/Skills_Icons/react.png';
import python from '../../assets/images/Skills_Icons/python.png';
import sass from '../../assets/images/Skills_Icons/sass.jpg';
import sql from '../../assets/images/Skills_Icons/sql.jpg';
import php from '../../assets/images/Skills_Icons/php.png';

import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <section id="section__skills" className="section__skills">
      <h2>Skills</h2>
    

        <div className="section__skills-card">

          <div className="skill-icons-wrapper">

            <div className="skill-icon_ctnr">
              <img src={html5} alt=" badges" />
              <h6>HTML 5</h6>
            </div>

            <div className="skill-icon_ctnr">
              <img src={css3} alt=" badges" />
              <h6>CSS 3</h6>
            </div>

            <div className="skill-icon_ctnr">
              <img src={js} alt=" badges" />
              <h6>JavaScript</h6>
            </div>

            <div className="skill-icon_ctnr">
              <img src={wp} alt=" badges" />
              <h6>WordPress</h6>
            </div>

            <div className="skill-icon_ctnr">
              <img src={php} alt=" badges" />
              <h6>PHP</h6>
            </div>

          {/* </div><div className="skill-icons-wrapper"> */}

            <div className="skill-icon_ctnr">
              <img src={react} alt=" badges" />
              <h6>React</h6>
            </div>
            <div className="skill-icon_ctnr">
              <img src={redux} alt=" badges" />
              <h6>Redux</h6>
            </div>

            <div className="skill-icon_ctnr">
              <img src={python} alt=" badges" />
              <h6>Python</h6>
            </div>


            <div className="skill-icon_ctnr">
              <img src={sass} alt=" badges" />
              <h6>Sass CSS</h6>
            </div>


            <div className="skill-icon_ctnr">
              <img src={sql} alt=" badges" />
              <h6>mySQL</h6>
            </div>

          </div>
        </div>
   
    </section>
  )
}

export default SkillsSection;
