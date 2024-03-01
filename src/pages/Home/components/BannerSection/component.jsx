import linkedIn from '../../../../assets/icons/linkedin.png';
import gmail from '../../../../assets/icons/gmail.png';
import github from '../../../../assets/icons/github-sign.png';

import profilePic from '../../../../assets/profile-img-whitebg.jpg';

import { TECH_ICONS } from './constants';


export default function BannerSection() {
    
    return (
        <section className="home-page__banner">
            <div className="background-text-wrapper">
                <span className="faded-name">Shivprasad</span>
                <span className="faded-javascript">JavaScript</span>
                <span className="faded-web">Web</span>
                <span className="faded-css">Css</span>
                <span className="faded-design">Design</span>
                <span className="faded-algorithm">Algorithm</span>
                <span className="blurred-circle one"></span>
                <span className="blurred-circle two"></span>
                <span className="blurred-circle three"></span>
            </div>
            <div className="home-page__section-wrapper section-padding">
                <div className="left-half">
                    <div className="content">
                        <h6 id="welcome-text">Hello! Welcome</h6>
                        <h1 id="name-text">I'm Shivprasad Babu</h1>
                        <h5 id="designation-text">Front End Developer</h5>
                        <div id="description-text">
                            <p>
                                I like to build beautiful and performant front-end products with great user experience.
                            </p>
                        </div>
                        <div className="website-links">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/shivprasad-babu/" target="_blank">
                                        <img src={linkedIn} alt="LinkedIn" width={35} />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={gmail} alt="Gmail" width={35} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Shivaprasad001" target="_blank">
                                        <img src={github} alt="GitHub" width={35} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-half">
                    <div className="content">
                        <div className="circles">
                            <span className="orange-dot"></span>
                            <span className="red-dot"></span>
                            <span className="blue-dot"></span>
                            <span className="green-dot"></span>
                        </div>
                        <div className="tech-icons">
                            {
                                TECH_ICONS.map((icon) => {
                                    return (
                                        <span className={icon.className} key={icon.name}>
                                            <img src={icon.src} alt={icon.altText} width={icon.width} />
                                        </span>
                                    )
                                })
                            }
                        </div>
                        <div className="profile-picture" style={{ background: `url(${profilePic})` }} />
                    </div>
                </div>
            </div>
        </section>
    )
}