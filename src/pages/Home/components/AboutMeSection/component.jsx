import SectionTitle from "../../../../components/SectionTitle";
import CodingImage from "../../../../assets/home/coding-animated.svg";

export default function AboutSection() {
    function onDownloadCVButtonClick() {
        console.log('Download CV button clicked');
    }

    return (
        <section className="home-page__about">
            <div className="about__left-section half-section section-vertical-padding section-horizontal-padding">
                <SectionTitle title="About Me"/>
                <div className="section-content">
                    <h3>Hi there,</h3>
                    <h3>I am Shivprasad Babu,</h3>
                    <div className="about__desc">
                        <p>You can call me Shiva.</p>
                        <p>I am a professional front-end web developer with around 7 years of experience.</p>
                        <br/>
                        <p>I am from Waterloo, ON, Canada.</p>
                    </div>
                    <div className="actions">
                        <button className="download-cv-button" onClick={onDownloadCVButtonClick}>Download CV</button>
                    </div>
                    <div className="experience">
                        <div className="years-tile about-section-tile">
                            <span className="exp-count tile-count">07</span>
                            <span className="tile-label">Yrs Experience</span>
                        </div>
                        <div className="projects-tile about-section-tile">
                            <span className="projects-count tile-count">30+</span>
                            <span className="tile-label">Projects</span>
                        </div>
                    </div>
                </div>
                <div className="blurred-circle"></div>
            </div>
            <div className="about__right-section half-section" style={{backgroundImage: `url(${CodingImage})`}}>
            </div>
        </section>
    )
}