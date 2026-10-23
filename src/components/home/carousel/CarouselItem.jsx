import './CarouselItem.css';
import { ArrowRight } from 'lucide-react';

const CarouselItem = props => {
    return (
        <li className='genre-card flex align-items-flex-end' style={{ backgroundImage: `url(${props.image})` }}>
            <p className="flex align-items-center h-font txt-cream uppercase ltr-spc-two width-100">
                <img src={props.icon} />{props.title}<ArrowRight color='var(--brand-orange)' className='arrow-right'/></p>
        </li>
    );
};

export default CarouselItem