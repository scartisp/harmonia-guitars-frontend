import "./Header.css";
import SiteTitle from './siteTitle/SiteTitle'
import Navigation from "./navigation/Navigation";

const Header = () => {
    return (
        <header className='border-box marginal-padding background-indigo section-divider'>
            <div id='main-header-container' className='flex jst-slf-center jst-cnt-spc-between align-items-center background-indigo width-100 max-width-2000'>
                <SiteTitle />
                <Navigation />
            </div>
        </header>
    );
};

export default Header;