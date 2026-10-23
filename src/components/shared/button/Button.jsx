const Button = props => {
    return (
        <button style={{borderRadius: '6px', padding: '14px', border: props.border }} className={`flex align-items-center jst-cnt-center body-txt-font ${props.txtColor}
                font-15px uppercase ${props.border} ${props.backgroundColor} pointer`}>{props.text}
            <img src={props.arrow} style={{paddingLeft: '10px'}}/></button>
    );
};

export default Button;