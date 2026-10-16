import "./Header.css";
import SiteTitle from './siteTitle/SiteTitle'
import Navigation from "./navigation/Navigation";

const Header = () => {
    return (
        <header className='border-box flex-row marginal-padding section-divider'>
            <div id='main-header-container' className='flex jst-slf-center jst-cnt-spc-between align-items-center background-indigo width-100'>
                <SiteTitle />
                <Navigation />
            </div>
        </header>
    );
};

export default Header;