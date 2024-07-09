import { useEffect, useRef, useState } from "react";
import ExperienceCard from "../../../../components/ExperienceCard";
import { WORK_EXPERIENCES } from "../../constants";

export default function ExperienceSection(props) {
  const [experienceList, setExperienceList] = useState(WORK_EXPERIENCES);

  useEffect(() => {
    if (props.isVisible) {
      for (let i = 0; i < experienceList.length; i++) {
        setTimeout(() => {
          let tempList = experienceList.map((item, index) => {
            if (index <= i) {
              return { ...item, show: true };
            }

            return item;
          });

          setExperienceList(tempList);
        }, i * 1000);
      }
    }
  }, [props.isVisible]);

  return (
    <div className="experience-section-wrapper">
      <ul className="experience-milestone">
        {experienceList.map((experience, index) => {
          return (
            <li key={index} className={experience.show ? "show" : ""}>
              <div
                className={`experience-card-wrapper ${
                  index % 2 == 0 ? "left" : "right"
                }`}
              >
                <ExperienceCard
                  companyName={experience.company}
                  designation={experience.designation}
                  duration={experience.duration}
                  location={experience.location}
                  techStack={experience.techStack}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
