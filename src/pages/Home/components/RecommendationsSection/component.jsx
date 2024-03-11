import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import Carousel from 'react-multi-carousel';
import { responsive } from './constants';
import quoteIcon from '../../../../assets/icons/quoteIcon.png';

export default function Recommendations() {
    return(
        <section className="home-page__recommendations section-horizontal-padding section-vertical-padding">
            <div className='two-circles-pattern'>
                <span className='big-circle'></span>
                <span className='small-circle'></span>
            </div>
            <SectionTitle title="Recommendations" sideTitle="From LinkedIn"/>
            <div className='recommendations-list-wrapper'>
                 <Carousel responsive={responsive}>
                    <div className='recommendation-item'>
                        <div className='name-letter'>V</div>
                        <span className='circle-pattern'></span>
                        <span className='quote-icon'><img src={quoteIcon} alt='Quote Icon'/></span>
                        <div className='description'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged
                            </p>
                        </div>
                        <div className='author-details'>
                            <h4 className='name'>Vinay</h4>
                            <p className='designation'>Senior Architect at ABC</p>
                        </div>
                    </div>
                    <div className='recommendation-item'>
                        <div className='name-letter'>V</div>
                        <span className='circle-pattern'></span>
                        <span className='quote-icon'><img src={quoteIcon} alt='Quote Icon'/></span>
                        <div className='description'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged
                            </p>
                        </div>
                        <div className='author-details'>
                            <h4 className='name'>Vinay</h4>
                            <p className='designation'>Senior Architect at ABC</p>
                        </div>
                    </div>
                    <div className='recommendation-item'>
                        <div className='name-letter'>V</div>
                        <span className='circle-pattern'></span>
                        <span className='quote-icon'><img src={quoteIcon} alt='Quote Icon'/></span>
                        <div className='description'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged
                            </p>
                        </div>
                        <div className='author-details'>
                            <h4 className='name'>Vinay</h4>
                            <p className='designation'>Senior Architect at ABC</p>
                        </div>
                    </div>
                 </Carousel>
             </div>       

        </section>
    )
}