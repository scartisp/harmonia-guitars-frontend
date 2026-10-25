
const FilterType = props => {
    return (
        <div style={{ width: '260px', paddingInline: '16px', borderRadius: '18px' }} className="border-box flex flex-column background-indigo">
            <p style={{ padding: '18px 0' }} className="flex jst-cnt-spc-between align-items-center margin-0">
                <span style={{ paddingRight: '10px' }} className="h-font font-26px txt-cream">{props.title}</span>
                <span className="body-txt-font font-15px txt-orange pointer">clear</span>
            </p>
                 <p style={{marginTop: '0', marginBottom: '12px'}} className="body-txt-font font-15px txt-cream">{props.description}</p>
            {props.content}
        </div>
    );
};

export default FilterType;