import SectionTitle from "../../../../components/SectionTitle";
import CodingImage from "../../../../assets/home/coding-animated.svg";

export default function AboutSection() {
    return (
        <section className="home-page__about">
            <div className="about__left-section half-section">
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
                        <button>Download CV</button>
                    </div>
                    <div className="experience">
                        <div className="years-tile">
                            <span className="exp-count">07</span>
                            <span>Yrs Experience</span>
                        </div>
                        <div className="projects-tile">
                            <span className="projects-count">30+</span>
                            <span>Projects</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__right-section half-section">
                <img src={CodingImage} alt="Coding" className="about__coding-img"/>
            </div>
        </section>
    )
}