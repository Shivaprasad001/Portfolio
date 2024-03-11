import AboutSection from "./components/AboutMeSection";
import BannerSection from "./components/BannerSection";
import Contact from "./components/ContactSection";
import Recommendations from "./components/RecommendationsSection";
import SkillsSection from "./components/SkillsSection";
import WorksSection from "./components/WorksSection";

export default function HomePage() {
    return(
        <section className="home-page">
            <BannerSection/>
            <AboutSection/>
            <SkillsSection/>
            <WorksSection/>
            <Recommendations/>
            <Contact/>
        </section>
    )
}