import { useRef, useEffect, useState } from "react";

import ResumeHeader from "../../components/ResumeHeader";
import SkillCard from "../../components/SkillCard";
import IntroSection from "./components/IntroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import userIcon from "../../assets/icons/user.svg";
import skillsIcon from "../../assets/icons/Skills.svg";
import experienceIcon from "../../assets/icons/Layers.svg";
import projectsIcon from "../../assets/icons/Flag.svg";
import educationIcon from "../../assets/icons/Book.svg";
import linksIcon from "../../assets/icons/Out.svg";
import { RESUME_DETAILS } from "./constants";
import EducationSection from "./components/EducationSection";

export default function ResumePage() {
  const experienceSectionRef = useRef();
  const educationSectionRef = useRef();
  const [isExperienceSectionVisible, setIsExperienceSectionVisible] =
    useState(false);

  const [isEducationSectionVisible, setIsEducationSectionVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsExperienceSectionVisible(entry.isIntersecting);
    });

    observer.observe(experienceSectionRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsEducationSectionVisible(entry.isIntersecting);
    });
    observer.observe(educationSectionRef.current);
  }, []);


  return (
    <section className="resume-page">
      <div className="resume-content">
        <div className="intro-section">
          <IntroSection
            name={RESUME_DETAILS.name}
            designation={RESUME_DETAILS.designation}
            phone={RESUME_DETAILS.phone}
            email={RESUME_DETAILS.email}
            location={RESUME_DETAILS.location}
          />
        </div>
        <div className="profile-section">
          <ResumeHeader title="Profile" icon={userIcon} />
          <div className="section-content">
            <p className="desc">{RESUME_DETAILS.profileDetails}</p>
          </div>
        </div>
        <div className="skills-section">
          <ResumeHeader title="Skills" icon={skillsIcon} />
          <div className="section-content">
            <SkillCard
              cardTitle="Languages"
              list={RESUME_DETAILS.skills.languages}
            />
            <SkillCard
              cardTitle="Libraries & Frameworks"
              list={RESUME_DETAILS.skills.libraries}
            />
            <SkillCard cardTitle="Tools" list={RESUME_DETAILS.skills.tools} />
          </div>
        </div>
        <div className="experience-section" ref={experienceSectionRef}>
          <ResumeHeader title="Work Experience" icon={experienceIcon} />
          <ExperienceSection isVisible={isExperienceSectionVisible}/>
        </div>
        <div className="projects-section">
          <ResumeHeader title="Projects" icon={projectsIcon} />
          <ProjectsSection/>
        </div>
        <div className="education-section" ref={educationSectionRef}>
          <ResumeHeader title="Education" icon={educationIcon} />
          <EducationSection isVisible={isEducationSectionVisible}/>
        </div>
        <div className="links-section">
          <ResumeHeader title="Links" icon={linksIcon} />
        </div>
      </div>
    </section>
  );
}
