import React from 'react';
import gol from '../../assets/images/jwn-game-of-life.jpg';
import frweather1 from '../../assets/images/ForRealWeather-1.jpg';
import frweather2 from '../../assets/images/ForRealWeather-2.jpg';
import MerchDropper1a from '../../assets/images/MerchDropper-1a.jpg';
import MerchDropper1b from '../../assets/images/MerchDropper-1b.jpg';
import PrisonerSkills1 from '../../assets/images/PrisonerSkills1.jpg';
import PrisonerSkills2 from '../../assets/images/PrisonerSkills2.jpg';
import AnywhereFitness from '../../assets/images/Anywhere_Fitness.jpg';
import Button from 'react-bootstrap/Button';


import './ProjectsSection.css';

const ProjectsSection = () => {
    return (
        <section id="section__projects" className="projects__portfolio">
            <h2>Some of my work</h2>

            <section className="row">
                <div className="card">
                    <h2 className="card__h2">Conway's Game of Life</h2>
                    <img src={gol} alt="jwn project" />
                    <div className="card__body">
                        <p >
                            The Game Of Life is a simulation developed in 1970 by mathematician John Conway. It applies
                            rules to create Cellular Automation. Cellular Automation is a grid of cells that cycle
                            through different states. It is "Turing Complete". Turing Complete means it can manipulate
                            data-manipulation rule sets.
						</p>
                    </div>
                    <div className="card__links-ctnr">
                        <div className="card__link">
                            <Button href="https://github.com/JWNicholson/gameoflife-john-nicholson" variant="success" block >Code Repo</Button>
                        </div>
                    </div>
                </div>



                <div className="card">
                    <h2 className="card__h2">Weather App</h2>
                    <div className="card__img-ctnr weather-app">
                        <img src={frweather1} alt="jwn weather app project" />
                        <img src={frweather2} alt="jwn weather app project" />
                    </div>
                    <div className="card__body">
                        <p >
                            This weather app uses Open Weather Map's API JSON data to retrieve weather data and display it
                            in a card. The project was a good excercise for passing and using props in React components.
						</p>
                        <p>Built with React | Axios js</p>
                    </div>
                    <div className="card__links-ctnr">
                        <div className="card__link">
                            <Button href="https://github.com/JWNicholson/for-real-weather" variant="success" block >Code Repo</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row">
                <div className="card">
                    <h2 className="card__h2">Merch Dropper</h2>
                    <div className="card__img-ctnr">
                        <img src={MerchDropper1a} alt="jwn weather app project" />
                        <img src={MerchDropper1b} alt="jwn weather app project" />
                    </div>
                    <div className="card__body">
                        <p >
                            An e-commerce project which enables small volume sellers and artists to drop ship merchandise with their art.
                            Users make an account, and once signed in is taken to a dashboard containing their created products.
                            In this project, my work was primarily on the front end. I collaborated with the
                            team to connect payment button to Stripe. Another colleague and I collaborated to increase test coverage with the addition of Cypress
						</p>
                        <p>Built with React | Jest | Cypress | Redux</p>
                    </div>
                    <div className="card__links-ctnr">
                        <div className="card__link">
                            <Button href="https://github.com/JWNicholson/Merch-Dropper-fe" variant="success" block >Code Repo</Button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h2 className="card__h2">Prisoner Skills</h2>
                    <div className="card__img-ctnr">
                        <img src={PrisonerSkills1} alt="jwn weather app project" />
                        <img src={PrisonerSkills2} alt="jwn weather app project" />
                    </div>
                    <div className="card__body">
                        <p >Prisoner Skills is a concept team project which provides Inmates, institutions, and employers a platform to create accounts and find matches for needs and skills.
                        My job was the marketing page. I designed the UI/UX with Adobe XD. Most users will be using laptop or desktpops. Putting the available skills on three cards instead of blocks is to let a potential user
                        quickly catch the skills that may apply to them.
						</p>
                        <p>Built with  HTML5 | CSS3| LESS </p>
                    </div>
                    <div className="card__links-ctnr">
                        <div className="card__link">
                            <Button href="https://github.com/JWNicholson/Marketing-Page" variant="success" block >Code Repo</Button>
                        </div>
                        <div className="card__link bottom-button">
                            <Button href="https://prisonerskills-jwn.netlify.app/" variant="primary" block >Live Site (Front end)</Button>
                        </div>
                    </div>
                </div>

            </section>

            <section className="row">
                <div className="card">
                    <h2 className="card__h2">Anywhere Fitness</h2>
                    <img src={AnywhereFitness} alt="jwn project" />
                    <div className="card__body">
                        <p >
                            Anywhere fitness provides fitness trainers and clients to find each other.
                            Each user must create the appropriate account and sign in. Trainers can post class times and
                            locations. Clients can find and sign up for classes.
						</p>
                        <p>
                            My part on this project was collaborating with a colleague to build the back-end. We created a role-based account
                            authorization system using secure routing,express, and SQLite. Dependencies & tools used include bcrypt,dotenv,web tokens, and knex.
                        </p>
                        <p>Built with  React | Express| SQLite </p>
                    </div>

                    <div className="card__links-ctnr">
                        <div className="card__link">
                            <Button href="https://github.com/anywhere-fitness-5/back-end/tree/john-nicholson" variant="success" block >Code Repo</Button>
                        </div>
                        <div className="card__link bottom-button">
                            <Button href="https://anywhere-fitness1243542.netlify.app/" variant="primary" block >Live Site</Button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ProjectsSection;

