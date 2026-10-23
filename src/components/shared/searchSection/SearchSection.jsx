import './SearchSection.css'
import SearchBar from './searchBar/SearchBar';

const SearchSection = props => {
    return (
        <section className="background-deepest-indigo body-marginal-padding section-divider">
            <div id="search-section-container">
                <SearchBar />
            </div>
        </section>
    )
};

export default SearchSection;