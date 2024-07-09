export default function ResumeHeader(props) {
    return(
        <div className="resume-header">
            <div className="content">
                <span className="header-icon-wrapper"><img src={props.icon} alt="Title Icon"/></span>
                <h3 className="title">{props.title}</h3>
            </div>
        </div>
    )
}