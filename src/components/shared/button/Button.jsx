import {ArrowRight} from 'lucide-react';

const Button = props => {
    return (
        <button style={{borderRadius: '6px', padding: '14px', border: props.border }} className={`flex align-items-center jst-cnt-center body-txt-font ${props.txtColor}
                font-15px uppercase ${props.fontWeight} ${props.border} ${props.backgroundColor} pointer`}>{props.text}
            <ArrowRight style={{paddingLeft: '10px'}} color={props.arrowColor}/></button>
    );
};

export default Button;