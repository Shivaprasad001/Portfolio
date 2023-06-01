import linkedIn from '../../../../assets/icons/linkedin.png';
import gmail from '../../../../assets/icons/gmail.png';
import github from '../../../../assets/icons/github-sign.png';
import profilePic from '../../../../assets/profile-img-whitebg.jpg';

export default function BannerSection() {
    return(
        <section className="home-page__banner">
            <div className="home-page__section-wrapper section-padding">
                <div className="left-half">
                    <div className="content">
                        <h6>Hello! Welcome</h6>
                        <h1>I'm Shivprasad Babu</h1>
                        <h5>Front End Developer</h5>
                        <div className="description">
                            <p>
                                I like to build beautiful and performant front-end products with great user experience.
                            </p>
                        </div>
                        <div className="website-links">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/shivprasad-babu/" target="_blank">
                                        <img src={linkedIn} alt="LinkedIn" width={35}/>
                                    </a>
                                    <a href="">
                                        <img src={gmail} alt="Gmail" width={35}/>
                                    </a>
                                    <a href="https://github.com/Shivaprasad001" target="_blank">
                                        <img src={github} alt="GitHub" width={35}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-half">
                    <div className="content">
                        <span className="orange-dot"></span>
                        <span className="red-dot"></span>
                        <span className="blue-dot"></span>
                        <span className="green-dot"></span>
                        <span className="html-icon"></span>
                        <span className="code-icon"></span>
                        <span className="css-icon"></span>
                        <span className="js-icon"></span>
                        <span className="node-icon"></span>
                        <span className="react-icon"></span>
                        <div className="profile-picture" style={{background: `url(${profilePic})`}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}