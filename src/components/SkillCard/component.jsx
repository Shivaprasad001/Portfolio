import CheckboxIcon from "../../assets/icons/Checkbox-checked.svg";

export default function SkillCard(props) {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <h6>{props.cardTitle}</h6>
      </div>
      <div className="skill-card-content">
        <ul className="skill-card-list">
          {props.list.map((listItem, index) => {
            return (
              <li key={index} className="skill-card-list-item">
                <img src={CheckboxIcon} alt="Checkbox Img" />
                {listItem}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
