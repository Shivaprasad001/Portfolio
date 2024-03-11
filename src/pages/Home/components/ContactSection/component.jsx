import React from 'react';
import ContactFeatureImage from './ContactFeatureImage';
import SectionTitle from '../../../../components/SectionTitle';
import Bubble from './Bubble';
import BubbleBg from '../../../../assets/contact/bubbles.png';
import phoneIcon from '../../../../assets/icons/Phone.png';
import emailIcon from '../../../../assets/icons/Message.png';
import skypeIcon from '../../../../assets/icons/skype.png';

export default function Contact() {
    return(
        <section className="home-page__contact section-horizontal-padding section-vertical-padding">
            <SectionTitle title="Contact" sideTitle="Get in touch" />
            <div className='contact-wrapper'>
                <div className='contact-details'>
                    <ul>
                        <li className='phone'>
                            <a href="tel:+1 647-784-3033">+1 647-784-3033</a>
                            <span className='icon'><img src={phoneIcon}/></span>
                        </li>
                        <li className='email'>
                            <a href="mailto:shiva.geci@gmail.com">shiva.geci@gmail.com</a>
                            <span className='icon'><img src={emailIcon}/></span>
                        </li>
                        <li className='skype'>
                            shiva.geci@gmail.com
                            <span className='icon'><img src={skypeIcon}/></span>
                        </li>
                    </ul>
                </div>
                <div className='bg-pattern'>
                    <div style={{background: `url(${BubbleBg})`}} className='pattern'>
                        {/* {[1,2,3,4,5].map((item) => {return (<Bubble key={item}/>)})} */}
                    </div>
                </div>
                <div className='contact-feature-img'>
                    <ContactFeatureImage/>
                </div>
            </div>
        </section>    
    )
}