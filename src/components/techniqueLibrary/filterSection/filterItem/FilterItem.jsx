import './FilterItem.css'

const FilterItem = props => {
    return (
        <p className="filter-item-p flex align-items-center ">
            <input type='checkbox' className='filter-item-checkbox'/>
            <span className="body-txt-font font-16px txt-cream">{props.filterText}</span>
            {props.additionalContent}
        </p>
    );
};

export default FilterItem;