import { useEffect } from 'react';
import gsap from 'gsap';

import linkedIn from '../../../../assets/icons/linkedin.png';
import gmail from '../../../../assets/icons/gmail.png';
import github from '../../../../assets/icons/github-sign.png';
import profilePic from '../../../../assets/profile-img-whitebg.jpg';

import { TECH_ICONS, FADE_IN_WITH_SCALE_EFFECT, SWIPE_UP_FADE_IN_EFFECT } from './constants';

export default function BannerSection() {
    useEffect(() => {
        const icons = document.querySelectorAll('.tech-icon');
        const decorCircles = document.querySelectorAll('.banner-filler-circle');
        const profilePicture = document.querySelector('.profile-picture');
        const featureTexts = document.querySelectorAll('.banner-slide-up-text');
        const bgFadedTexts = document.querySelectorAll('.fade-in-effect');

        gsap.to(bgFadedTexts, FADE_IN_WITH_SCALE_EFFECT);
        let tl = gsap.timeline();
        tl.to(featureTexts, SWIPE_UP_FADE_IN_EFFECT);
        tl.to(profilePicture, FADE_IN_WITH_SCALE_EFFECT, "-=1");
        tl.to(icons, FADE_IN_WITH_SCALE_EFFECT, "-=1");
        tl.to(decorCircles, FADE_IN_WITH_SCALE_EFFECT, "-=2");

    }, []);
    return (
        <section className="home-page__banner">
            <div className="background-text-wrapper">
                <span className="faded-name fade-in-effect">Shivprasad</span>
                <span className="faded-javascript fade-in-effect">JavaScript</span>
                <span className="faded-web fade-in-effect">Web</span>
                <span className="faded-css fade-in-effect">Css</span>
                <span className="faded-design fade-in-effect">Design</span>
                <span className="faded-algorithm fade-in-effect">Algorithm</span>
                <span className="blurred-circle one"></span>
                <span className="blurred-circle two"></span>
                <span className="blurred-circle three"></span>
            </div>
            <div className="home-page__section-wrapper section-padding">
                <div className="left-half">
                    <div className="content">
                        <h6 id="welcome-text" className='banner-slide-up-text'>Hello! Welcome</h6>
                        <h1 id="name-text" className='banner-slide-up-text'>I'm Shivprasad Babu</h1>
                        <h5 id="designation-text" className='banner-slide-up-text'>Front End Developer</h5>
                        <div id="description-text" className='banner-slide-up-text'>
                            <p>
                                I like to build beautiful and performant front-end products with great user experience.
                            </p>
                        </div>
                        <div className="website-links banner-slide-up-text">
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
                            <span className="orange-dot banner-filler-circle"></span>
                            <span className="red-dot banner-filler-circle"></span>
                            <span className="blue-dot banner-filler-circle"></span>
                            <span className="green-dot banner-filler-circle"></span>
                        </div>
                        <div className="tech-icons">
                            {
                                TECH_ICONS.map((icon, index) => {
                                    return (
                                        <span className={icon.className} key={index}>
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