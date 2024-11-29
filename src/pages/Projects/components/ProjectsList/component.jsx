import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCardWithImage from "../../../../components/ProjectCardWithImage";
import { PROJECTS } from "./constants";
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsList(props) {

    useGSAP(() => {
       const projectCards = document.querySelectorAll('.projects-page__project-card');
       projectCards.forEach((projectCard, i) => {
           gsap.to(
            projectCard,
            {
                delay: i*0.1,
                opacity: 1,
                duration: 0.8,
                y: 0,
                ease: 'ease',
                scrollTrigger: {
                    trigger: projectCard,
                    start: 'top 80%',
                }
            }
           )
        });
    })
    return(
        <ul className="projects-page__projects-list">
            {PROJECTS.map((project, index) => (
                <li 
                    key={index}
                    className="projects-page__project-card"    
                >
                    <ProjectCardWithImage
                        title={project.title}
                        techStack={project.techStack}
                        desc={project.desc}
                        projectType={project.projectType}
                        gitLink={project.gitLink}
                        featuredImg={project.featuredImg}
                    />

                </li>
            ))}
        </ul>
    )
}