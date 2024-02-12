import AboutSection from "./components/AboutMeSection";
import BannerSection from "./components/BannerSection";

export default function HomePage() {
    return(
        <section className="home-page">
            <BannerSection/>
            <AboutSection/>
        </section>
    )
}