import './SearchSection.css'
import { useState } from 'react';
import { Plus } from 'lucide-react'
import SearchBar from './searchBar/SearchBar';
import SearchPill from './searchPill/SearchPill';
import ActiveFilters from './activeFilters/ActiveFilters';

const SearchSection = props => {
    const [selectedPills, setSelectedPills] = useState([]);
    const togglePill = name => {
        if (selectedPills.includes(name)) {
            setSelectedPills(selectedPills.filter(pill => pill !== name));
        } else {
            setSelectedPills([...selectedPills, name]);
        }
    };

    return (
        <section className="background-deepest-indigo body-marginal-padding section-divider">
            <div id="search-section-container">
                <SearchBar />
                <p className='flex wrap align-items-center gap-8px body-txt-font txt-cream font-15px margin-0'>
                    Search in:
                    <SearchPill text={props.searchPillOne} selected={selectedPills.includes(props.searchPillOne)} onClick={() => togglePill(props.searchPillOne)} />
                    <SearchPill text={props.searchPillTwo} selected={selectedPills.includes(props.searchPillTwo)} onClick={() => togglePill(props.searchPillTwo)} />
                    <SearchPill text={props.searchPillThree} selected={selectedPills.includes(props.searchPillThree)} onClick={() => togglePill(props.searchPillThree)} />
                    <SearchPill text={props.searchPillFour} selected={selectedPills.includes(props.searchPillFour)} onClick={() => togglePill(props.searchPillFour)} />
                </p>
                <div id='active-filters' className='flex flex-row wrap align-items-center gap-8px body-txt-font txt-cream font-15px '>Must Include:
                    <ActiveFilters filterType={props.typeOne} filter={props.filterOne} />
                    <ActiveFilters filterType={props.typeTwo} filter={props.filterTwo} />
                    <ActiveFilters filterType={props.typeThree} filter={props.filterThree} />
                    <Plus size={12} />
                    <span className="body-txt-font txt-orange font-15px txt-underline">clear all</span>

                </div>
            </div>
        </section>
    )
};

export default SearchSection;