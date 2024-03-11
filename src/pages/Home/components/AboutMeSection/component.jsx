import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../../../../components/SectionTitle";
import CodingImage from "../../../../assets/home/coding-animated.svg";

import {SWIPE_UP_FADE_IN_EFFECT, SLIDE_IN_FROM_RIGHT} from '../../constants';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {

    useEffect(()=> {
        const sectionTitle = document.querySelector('.section-title');
        const slideInItems = document.querySelectorAll('.slide-in-with-fade');
        const rigthSection = document.querySelector('.about__right-section');

        gsap.to(sectionTitle, {
            scrollTrigger: {
                trigger: '.home-page__about',
                start: 'top 80%',
                markers: true,
                toggleActions: "restart none none reverse"
            },
            ...SWIPE_UP_FADE_IN_EFFECT
        });

        gsap.to(slideInItems, {
            scrollTrigger: {
                trigger: '.home-page__about',
                start: 'top 80%',
                markers: true,
                toggleActions: "restart none none reverse"
            },
            ...SWIPE_UP_FADE_IN_EFFECT
        });

        gsap.to(rigthSection, {
            scrollTrigger: {
                trigger: '.home-page__about',
                start: 'top 80%',
                markers: true,
                toggleActions: "restart none none reverse"
            },
            ...SLIDE_IN_FROM_RIGHT,
        })
    },[]);


    function onDownloadCVButtonClick() {
        console.log('Download CV button clicked');
    }

    return (
        <section className="home-page__about">
            <div className="about__left-section half-section section-vertical-padding section-horizontal-padding">
                <SectionTitle title="About Me"/>
                <div className="section-content">
                    <h3 className="slide-in-with-fade">Hi there,</h3>
                    <h3 className="slide-in-with-fade">I am Shivprasad Babu,</h3>
                    <div className="about__desc slide-in-with-fade">
                        <p>You can call me Shiva.</p>
                        <p>I am a professional front-end web developer with around 7 years of experience.</p>
                        <br/>
                        <p>I am from Waterloo, ON, Canada.</p>
                    </div>
                    <div className="actions slide-in-with-fade">
                        <button className="download-cv-button sb-btn" onClick={onDownloadCVButtonClick}><span>Download CV</span></button>
                    </div>
                    <div className="experience">
                        <div className="years-tile about-section-tile slide-in-with-fade">
                            <span className="exp-count tile-count">07</span>
                            <span className="tile-label">Yrs Experience</span>
                        </div>
                        <div className="projects-tile about-section-tile slide-in-with-fade">
                            <span className="projects-count tile-count">30+</span>
                            <span className="tile-label">Projects</span>
                        </div>
                    </div>
                </div>
                <div className="blurred-circle"></div>
            </div>
            <div className="about__right-section half-section slide-in-from-right" style={{backgroundImage: `url(${CodingImage})`}}>
            </div>
        </section>
    )
}