import './CarouselItem.css';
import arrowRight from '../images/arrow-right-orange.png';

const CarouselItem = (props) => {
    return (
        <li className='genre-card flex align-items-flex-end' style={{ backgroundImage: url(props.image) }}>
            <p className="flex align-items-center h-font txt-cream uppercase ltr-spc-two width-100">
                <img src={props.icon} />rock<img src={arrowRight} /></p>
        </li>
    );
};

export default CarouselItem