import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import SectionTitle from '../../../../components/SectionTitle';
import Capsule from '../../../../components/Capsule';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './constants';
import Image from '../../../../assets/projects/project.png'
import GitIcon from '../../../../assets/icons/GitIconGrey.png';

export default function WorksSection() {
    return (
        <section className="home-page__projects section-horizontal-padding section-vertical-padding">
            <SectionTitle title="Projects" sideTitle="Every work has a story to tell" />
            <div className='projects-slider-wrapper'>
                <Carousel responsive={responsive}>
                    <div className='projects-slide-item'>
                        <div className='slide'>
                            <figure style={{background: `url(${Image})`}} className='project-img'>
                            </figure>
                            <h3 className='project-title'>Project Title</h3>
                            <div className='tech-stack'>
                                <ul>
                                    <li>
                                        <Capsule name="HTML" bgColor="#B3B3B3"/>
                                    </li>
                                    <li>
                                        <Capsule name="JavaScript" bgColor="#EB9090"/>
                                    </li>
                                    <li>
                                        <Capsule name="CSS3" bgColor="#277E79"/>
                                    </li>
                                </ul>
                            </div>
                            <div className='tech-list'></div>
                            <div className='description'>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>
                            <div className='actions'>
                                <a className='project-github-icon'>
                                    <img src={GitIcon} alt='GIT Icon'/>
                                    </a>
                                <a className='project-preview-link sb-btn'><span>Preview</span></a>
                            </div>
                        </div>
                    </div>
                    <div className='projects-slide-item'>
                        <div className='slide'>
                            <figure style={{background: `url(${Image})`}} className='project-img'>
                            </figure>
                            <h3 className='project-title'>Project Title</h3>
                            <div className='tech-stack'>
                                <ul>
                                    <li>
                                        <Capsule name="HTML" bgColor="#B3B3B3"/>
                                    </li>
                                    <li>
                                        <Capsule name="JavaScript" bgColor="#EB9090"/>
                                    </li>
                                    <li>
                                        <Capsule name="CSS3" bgColor="#277E79"/>
                                    </li>
                                </ul>
                            </div>
                            <div className='description'>
                                <p>It is a long established fact that a reader. </p>
                            </div>
                            <div className='actions'>
                                <a className='project-github-icon'>
                                    <img src={GitIcon} alt='GIT Icon'/>
                                    </a>
                                <a className='project-preview-link sb-btn'><span>Preview</span></a>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}