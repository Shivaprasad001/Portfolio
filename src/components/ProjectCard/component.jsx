import Capsule from "../Capsule/component";
import RigthArrow from "../../assets/icons/Expand_Right.svg";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <h2 className="project-title">{props.title}</h2>
        <span className="project-type">{props.projectType}</span>
      </div>
      <div className="project-card__content">
        <div className="project-description">
          <p>{props.desc}</p>
        </div>
        <div className="action-section">
            <button className="read-more-link">Read More <img src={RigthArrow} alt="Right Arrow"/></button>
        </div>
        <div className="tech-stack-section">
          <h4 className="tech-stack-title">Tech Stack</h4>
          <ul className="tech-stack-list">
            {props.techStack.map((tech, index) => {
              return (
                <li key={index}>
                  <Capsule name={tech} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
