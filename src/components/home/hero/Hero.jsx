import arrowRight from '../images/arrow-right-indigo-deep.png';
import Button from '../../shared/button/Button';

import './Hero.css';

const Hero = () => {
    return (
        <section id='hero-section' className='border-box width-100 section-divider'>
            <div id='hero-content-div' className='jst-slf-center width-100 max-width-2000'>
                <div id='hero-tagline-div' className='h-font ltr-spc-two uppercase margin-0'>
                    <h2 className='txt-cream'>real songs</h2>
                    <h2 className='txt-cream'>real techniques</h2>
                    <h2 className='txt-orange'>real people</h2>
                </div>
                <p id="hero-p" className='body-txt-font txt-cream'>Build a weekly practice schedule around the songs, techniques, and genres you want to master!</p>
                <Button txtColor='txt-indigo-deep' backgroundColor='background-orange' border='transparent' text='build your schedule' arrow={arrowRight}/>
            </div>
        </section>
    );
};

export default Hero;