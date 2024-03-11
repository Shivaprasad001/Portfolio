export default function SectionTitle(props) {
    return (
        <div className="section-title">
            <div className="section-title__header-wrapper">
                <h2 className="title">{props.title}</h2>
                <span className="side-title">{props.sideTitle}</span>
            </div>
            <div className="border-pattern">
                <span className="border-pattern__line"></span>
                <span className="border-pattern__circle one"></span>
                <span className="border-pattern__circle two"></span>
                <span className="border-pattern__circle three"></span>
            </div>
        </div>
    )
}