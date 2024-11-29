import gitIcon from '../../assets/icons/GitIconGrey.png';
import Capsule from '../Capsule';
export default function ProjectCardWithImage(props) {
  return (
    <div className="project-card-with-img">
      <div className="project-card-with-img__content">
        <div className="project-card-with-img__upper-half">
          <div className="title-area">
            <h3 className="project-title">{props.title}</h3>
          </div>
          <figure>
            <img src={props.featuredImg} />
          </figure>
        </div>
        <div className="project-card-with-img__lower-half">
          <div className="title-area">
            <h3 className="project-title">{props.title}</h3>
          </div>
          <ul className="tech-stack-list">
            {props.techStack.map((tech, index) => {
              return (
                <li key={index}>
                  <Capsule name={tech} />
                </li>
              );
            })}
          </ul>
          <div className="desc">
            <p>{props.desc}</p>
          </div>
          <div className="actions">
            <a href={props.gitLink} className='git-link'><img src={gitIcon}/></a>
            <a className='project-preview-link sb-btn'><span>Preview</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}
