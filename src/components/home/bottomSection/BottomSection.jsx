import './BottomSection.css';
import guitarOutline from '../images/guitar-outline.png';
import arrowRight from '../images/arrow-right-orange.png';
import practiceImg from '../images/practice-img.png'

import Button from '../../shared/button/Button'

const BottomSection = () => {
    return (
        <section id='bottom-section' className='border-box width-100 body-marginal-padding section-divider'>
            <div id='bottom-section-container' className='flex flex-row jst-slf-center width-100 max-width-1300'>
                <div className='relative'>
                    <hr id="horizontal-line" className='border-none background-orange margin-0' />
                    <img src={guitarOutline} id="guitar-img" />
                    <h2 id='tagline' className='h-font uppercase txt-cream weight-500'>get started with our <br /><span
                        className='txt-orange'>community currated <br /></span>song and schedule libraries</h2>
                    <p id="text-p" className='body-txt-font font-18px txt-cream'>Browse songs and practice schedules shared by guitarists like you. Or dig into the
                        technique library to find exactly what to work on next!</p>
                    
                    <Button  txtColor='txt-orange' backgroundColor='background-transparent' border='2px solid var(--brand-orange)' text='browse the song library' arrowColor='var(--brand-orange)'/>
                </div>
                <img src={practiceImg} id='practice-img' />
            </div>
        </section>
    );
};

export default BottomSection