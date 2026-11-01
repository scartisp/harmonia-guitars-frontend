import './Carousel.css'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import carouselPrevArrow from '../images/carousel-prev-arrow.png';
import carouselNextArrow from '../images/carousel-next-arrow.png';

import rock from '../images/carouselImages/rock.png';
import blues from '../images/carouselImages/blues.png';
import country from '../images/carouselImages/country.png';
import funk from '../images/carouselImages/funk.png';
import jazz from '../images/carouselImages/jazz.png';
import metal from '../images/carouselImages/metal.png';

import guitar from '../images/carouselIcons/guitar.png';
import fedora from '../images/carouselIcons/fedora.png';
import cowboyHat from '../images/carouselIcons/cowboy-hat.png';
import star from '../images/carouselIcons/star.png';
import sax from '../images/carouselIcons/jazz-icon.png';
import metalIcon from '../images/carouselIcons/metal-icon.png'

import CarouselItem from './CarouselItem';

const genres = [
    { image: rock, icon: guitar, title: 'rock' },
    { image: blues, icon: fedora, title: 'blues' },
    { image: country, icon: cowboyHat, title: 'country' },
    { image: funk, icon: star, title: 'funk' },
    { image: jazz, icon: sax, title: 'jazz' },
    { image: metal, icon: metalIcon, title: 'metal' },
];

const Carousel = () => {

    return (
        <section className='border-box background-indigo width-100 body-marginal-padding section-divider'>
            <div id='carousel-container' className='flex flex-row align-items-center jst-cnt-center'>
                <img src={carouselPrevArrow} id="carousel-prev" className="pointer" />
                <Swiper
                    id='card-swiper'
                    modules={[Navigation, Pagination, Autoplay]}
                    wrapperTag='ul'
                    spaceBetween={24}
                    loop
                    navigation={{ prevEl: '#carousel-prev', nextEl: '#carousel-next' }}
                    pagination={{
                        el: '#carousel-dots-div',
                        clickable: true,
                        bulletClass: 'carousel-dot',
                        bulletActiveClass: 'carousel-selected'
                    }}
                    autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
                    slidesPerView={1}
                    breakpoints={{
                        450: { slidesPerView: 2 },
                        700: { slidesPerView: 3 },
                        1000: { slidesPerView: 4 },
                        1360: { slidesPerView: 5 },
                    }}
                >
                    {genres.map(genre => (
                        <SwiperSlide tag='li' key={genre.title}>
                            <CarouselItem {...genre} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <img src={carouselNextArrow} id="carousel-next" className="pointer" />
            </div>
            <div id="carousel-dots-div" className='flex flex-row align-self-center jst-slf-center'>
                <div className="carousel-selected"></div>
                <div className="carousel-unselected"></div>
                <div className="carousel-unselected"></div>
            </div>
        </section>
    );
};

export default Carousel;