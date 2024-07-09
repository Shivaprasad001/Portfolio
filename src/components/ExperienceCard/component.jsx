export default function ExperienceCard(props) {
    return (
        <div className={`experience-card`}>
            <div className="row company-name">
                <label>Company:</label><span>{props.companyName}</span>
            </div>
            <div className="row small-grey-font">
                <label>Designation:</label><span>{props.designation}</span>
            </div>
            <div className="row small-grey-font">
                <label>Year:</label><span>{props.duration}</span>
            </div>
            <div className="row small-grey-font">
                <label>Location:</label><span>{props.location}</span>
            </div>
            <div className="row tech-stack">
                <label>Tech Stack:</label><span>{props.techStack.join(', ')}</span>
            </div>
        </div>
    )
}