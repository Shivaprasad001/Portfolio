import GitIcon from '../../../../assets/icons/git-black.svg';
import LinkedInIcon from '../../../../assets/icons/linkedin-black.svg';

export default function LinksSection() {
    return(
        <div className="link-section-wrapper">
            <ul className='website-links'>
                <li>
                    <img src={GitIcon} alt="Git Icon"/>
                    <a href="https://github.com/Shivaprasad001" target='_blank'>https://github.com/Shivaprasad001</a>
                </li>
                <li>
                    <img src={LinkedInIcon} alt="LinkedIn Icon"/>
                    <a href="https://www.linkedin.com/in/shivprasad-babu/" target='_blank'>https://www.linkedin.com/in/shivprasad-babu/</a>
                </li>
            </ul>
        </div>
    )
}