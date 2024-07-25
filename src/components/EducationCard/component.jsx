export default function EducationCard(props) {
    return (
        <div className={`education-card`}>
            <div className="row company-name">
                <span>{props.course}</span>
            </div>
            <div className="row small-grey-font">
                <span>{props.level}</span>
            </div>
            <div className="row small-grey-font">
                <label>Year:</label><span>{props.duration}</span>
            </div>
            <div className="row small-grey-font">
                <span>{props.institution}</span>
            </div>
        </div>
    )
}