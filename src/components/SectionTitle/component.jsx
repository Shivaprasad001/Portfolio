export default function SectionTitle(props) {
    return (
        <div className="section-title">
            <h2 className="title">{props.title}</h2>
            <div className="border-pattern">
                <span className="border-pattern__line"></span>
                <span className="border-pattern__circle one"></span>
                <span className="border-pattern__circle two"></span>
                <span className="border-pattern__circle three"></span>
            </div>
        </div>
    )
}