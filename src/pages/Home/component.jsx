import AboutSection from "./components/AboutMeSection";
import BannerSection from "./components/BannerSection";
import SkillsSection from "./components/SkillsSection";

export default function HomePage() {
    return(
        <section className="home-page">
            <BannerSection/>
            <AboutSection/>
            <SkillsSection/>
        </section>
    )
}