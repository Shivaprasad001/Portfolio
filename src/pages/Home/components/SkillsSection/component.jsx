import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import SkillsList from '../../../../components/SkillsList';
import { SKILLS } from './constants';

export default function SkillsSection() {
    return(
        <section className="home-page__skills section-horizontal-padding section-vertical-padding">
            <SectionTitle title="My Skills" subTitle="Keep Learning"/>
            <div className='skills-list-section-wrapper'>
                <SkillsList skills={SKILLS.languages} legend="<Languages/>"/>           
                <SkillsList skills={SKILLS.libraries} legend="<Libraries & Frameworks/>"/>           
                <SkillsList skills={SKILLS.others} legend="<Others/>"/>    
             </div>       

        </section>
    )
}