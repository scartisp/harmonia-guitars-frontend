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
                    <SearchPill text='All' selected={selectedPills.includes('All')} onClick={() => togglePill('All')} />
                    <SearchPill text='Song name' selected={selectedPills.includes('Song name')} onClick={() => togglePill('Song name')} />
                    <SearchPill text='Techniques' selected={selectedPills.includes('Techniques')} onClick={() => togglePill('Techniques')} />
                    <SearchPill text='Genres' selected={selectedPills.includes('Genres')} onClick={() => togglePill('Genres')} />
                </p>
                <div id='active-filters' className='flex flex-row wrap align-items-center gap-8px body-txt-font txt-cream font-15px '>Must Include:
                    <ActiveFilters filterType='Genre' filter='Top Songs' />
                    <ActiveFilters filterType='Technique' filter='Bends' />
                    <ActiveFilters filterType='Song' filter='The Thrill is Gone' />
                    <Plus size={12} />
                    <span className="body-txt-font txt-orange font-15px txt-underline">clear all</span>

                </div>
            </div>
        </section>
    )
};

export default SearchSection;