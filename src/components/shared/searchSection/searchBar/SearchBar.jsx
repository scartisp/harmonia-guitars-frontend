import './SearchBar.css'
import Button from '../../../shared/button/Button'
import { Search } from 'lucide-react'
const SearchBar = props => {
    return (
        <div style={{ padding: '5px', borderRadius: '10px' }} id='search-bar-div' className='flex flex-row align-items-center background-cream'>
            <Search color='var(--brand-deepest-indigo)' />
            <input type="search" id='search-bar-input' style={{ paddingLeft: '10px' }} className='body-txt-font flex-1 background-transparent border-none' placeholder="Search songs by name, technique, or genre"></input>
            <Button txtColor='txt-indigo-deep' backgroundColor='background-orange' border='transparent' text='search' fontWeight='weight-600' arrowColor='var(--brand-indigo-deep)' />
        </div>
    );
};

export default SearchBar;