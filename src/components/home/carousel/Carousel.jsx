import './Carousel.css'
import carouselPrevArrow from '../images/carousel-prev-arrow.png';
import carouselNextArrow from '../images/carousel-next-arrow.png';
import arrowRight from '../images/arrow-right-orange.png';
import guitar from '../images/carouselIcons/guitar.png';
import fedora from '../images/carouselIcons/fedora.png';
import cowboyHat from '../images/carouselIcons/cowboy-hat.png';
import star from '../images/carouselIcons/star.png';
import sax from '../images/carouselIcons/jazz-icon.png';

const Carousel = () => {
    return (
        <section className='border-box background-indigo width-100 body-marginal-padding section-divider'>
            <div id='carousel-container' className='flex flex-row align-items-center jst-cnt-center'>
                <img src={carouselPrevArrow} id="carousel-prev" className="pointer" />
                <ul id='card-ul' className='flex flex-row list-style-none padding-0'>
                    <li id='rock-card' className='genre-card flex align-items-flex-end '>
                        <p className="flex align-items-center h-font txt-cream uppercase ltr-spc-two width-100"><img src={guitar} />rock<img
                            src={arrowRight} /></p>
                    </li>
                    <li id='blues-card' className='genre-card flex align-items-flex-end '>
                        <p className="flex align-items-center h-font txt-cream uppercase ltr-spc-two width-100"><img src={fedora} />blues<img
                            src={arrowRight} /></p>
                    </li>
                    <li id='country-card' className='genre-card flex align-items-flex-end '>
                        <p className="flex align-items-center h-font txt-cream uppercase ltr-spc-two width-100"><img src={cowboyHat} />country<img
                            src={arrowRight} /></p>
                    </li>
                    <li id='funk-card' className='genre-card flex align-items-flex-end '>
                        <p className="flex align-items-center h-font txt-cream uppercase ltr-spc-two width-100"><img src={star} />country<img
                            src={arrowRight} /></p>
                    </li>
                    <li id='jazz-card' className='genre-card flex align-items-flex-end '>
                        <p className="flex align-items-center h-font txt-cream uppercase ltr-spc-two width-100"><img src={sax} />Jazz<img
                            src={arrowRight} /></p>
                    </li>
                </ul>
                <img src={carouselNextArrow} id="carousel-next" className="pointer" />
            </div>
                <div id="carousel-dots-div" className='flex flex-row align-self-center jst-slf-center'>
                    <div className="selected"></div>
                    <div className="unselected"></div>
                    <div className="unselected"></div>
                </div>
        </section>
    );
};

export default Carousel;