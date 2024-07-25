import { useState, useEffect } from "react"
import { EDUCATION } from "../../constants";
import EducationCard from "../../../../components/EducationCard";

export default function EducationSection(props) {
    const [educationList, setEducationList] = useState(EDUCATION);

    useEffect(() => {
        if (props.isVisible) {
          for (let i = 0; i < educationList.length; i++) {
            setTimeout(() => {
              let tempList = educationList.map((item, index) => {
                if (index <= i) {
                  return { ...item, show: true };
                }
    
                return item;
              });
    
              setEducationList(tempList);
            }, i * 1000);
          }
        }
      }, [props.isVisible]);

    return (
        <div className="education-section-wrapper">
            <ul className="education-milestone">
                {educationList.map((education, index) => {
                    return (
                        <li key={index} className={education.show ? "show" : ""}>
                            <div
                                className={`education-card-wrapper ${
                                    index % 2 == 0 ? "left" : "right"
                                }`}
                            >
                                <EducationCard
                                    level={education.level}
                                    institution={education.institution}
                                    duration={education.duration}
                                    course={education.course}
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>    
        </div>
    )
}