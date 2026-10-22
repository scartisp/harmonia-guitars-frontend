import './Carousel.css'
import carouselPrevArrow from '../images/carousel-prev-arrow.png';
import carouselNextArrow from '../images/carousel-next-arrow.png';
import arrowRight from '../images/arrow-right-orange.png';

import rock from '../images/carouselImages/rock.png';
import blues from '../images/carouselImages/blues.png';
import country from '../images/carouselImages/country.png';
import funk from '../images/carouselImages/funk.png';
import jazz from '../images/carouselImages/jazz.png';

import guitar from '../images/carouselIcons/guitar.png';
import fedora from '../images/carouselIcons/fedora.png';
import cowboyHat from '../images/carouselIcons/cowboy-hat.png';
import star from '../images/carouselIcons/star.png';
import sax from '../images/carouselIcons/jazz-icon.png';
import CarouselItem from './CarouselItem';

const Carousel = () => {
    return (
        <section className='border-box background-indigo width-100 body-marginal-padding section-divider'>
            <div id='carousel-container' className='flex flex-row align-items-center jst-cnt-center'>
                <img src={carouselPrevArrow} id="carousel-prev" className="pointer" />
                <ul id='card-ul' className='flex flex-row list-style-none padding-0'>
                    <CarouselItem
                        image={rock}
                        icon={guitar}
                        title='rock'
                    />
                    <CarouselItem
                        image={blues}
                        icon={fedora}
                        title='blues'
                    />
                    <CarouselItem
                        image={country}
                        icon={cowboyHat}
                        title='country'
                    />
                    <CarouselItem
                        image={funk}
                        icon={star}
                        title='funk'
                    />
                    <CarouselItem
                        image={jazz}
                        icon={sax}
                        title='jazz'
                    />
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