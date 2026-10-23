import './SearchPill.css'

const SearchPill = props => {
    return (
        <span className={`search-pill search-unselected ${props.selected ? 'search-selected': ''}`} onClick={props.onClick}>
            {props.text}
        </span>
    );
};

export default SearchPill;