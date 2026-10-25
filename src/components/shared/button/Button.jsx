import './Button.css'
import {ArrowRight} from 'lucide-react';

const Button = props => {
    return (
        <button style={{borderRadius: '6px', border: props.border }} className={`general-btn flex align-items-center jst-cnt-center body-txt-font ${props.className ?? ''} ${props.txtColor}
                font-15px uppercase ${props.fontWeight} ${props.border} ${props.backgroundColor} pointer`}>{props.text}
            <ArrowRight style={{paddingLeft: '10px'}} color={props.arrowColor}/></button>
    );
};

export default Button;