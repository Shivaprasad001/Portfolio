import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../../../../components/SectionTitle';
import SkillsList from '../../../../components/SkillsList';
import { SKILLS } from './constants';
import {SWIPE_UP_FADE_IN_EFFECT, SLIDE_IN_FROM_RIGHT} from '../../constants';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {

    useEffect(() => {
        const sectionTitle = document.querySelector('.skills-section-title');
        gsap.to(sectionTitle, {
            scrollTrigger: {
                trigger: '.home-page__skills',
                start: 'top 80%',
                markers: true,
                toggleActions: "restart none none reverse"
            },
            ...SWIPE_UP_FADE_IN_EFFECT
        })
    }, []);

    return (
        <section className="home-page__skills section-horizontal-padding section-vertical-padding">
            <SectionTitle title="My Skills" sideTitle="Keep Learning" customClass="skills-section-title" />
            <div className='skills-list-section-wrapper'>
                <SkillsList skills={SKILLS.languages} legend="<Languages/>" />
                <SkillsList skills={SKILLS.libraries} legend="<Libraries & Frameworks/>" />
                <SkillsList skills={SKILLS.others} legend="<Others/>" />
            </div>

        </section>
    )
}