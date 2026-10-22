import "./Header.css";
import SiteTitle from './siteTitle/SiteTitle'
import Navigation from "./navigation/Navigation";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='border-box marginal-padding background-indigo section-divider'>
            <div id='main-header-container' className='flex jst-slf-center jst-cnt-spc-between align-items-center background-indigo width-100 max-width-2000'>
                <NavLink to='/' className='txt-decoration-none'><SiteTitle /></NavLink>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;