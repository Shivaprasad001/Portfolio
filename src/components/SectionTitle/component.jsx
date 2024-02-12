export default function SectionTitle(props) {
    return (
        <div>
            <h2 className="section-title">{props.title}</h2>
            <div className="border-pattern">
                <span className="border-pattern__line"></span>
                <span className="border-pattern__circle"></span>
                <span className="border-pattern__circle"></span>
                <span className="border-pattern__circle"></span>
            </div>
        </div>
    )
}