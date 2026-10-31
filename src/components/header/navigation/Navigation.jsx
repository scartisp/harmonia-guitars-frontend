import './Navigation.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu } from 'lucide-react';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div id='toggle-nav' className={menuOpen ? 'toggle-nav-click' : ''}>
                <h3 className='body-txt-font txt-cream ltr-spc-two margin-0 font-26px weight-400'>Nav</h3>
                <Menu className='pointer' color='var(--brand-cream)' size={35} onClick={toggleNav} />
            </div>
            <nav id='main-navigation'>
                <ul id='main-nav-ul' className={`flex wrap jst-cnt-center list-style-none padding-0 ${menuOpen ? '' : 'nav-hidden'} `}>
                    <li className="nav-divider"><NavLink
                        to='/songLibrary'>Song Library
                    </NavLink></li>
                    <li className="nav-divider"><NavLink to='/techniqueLibrary'>Technique Library</NavLink></li>
                    <li className="nav-divider"><NavLink to='/scheduleLibrary'>Schedule Library</NavLink></li>
                    <li className="nav-divider"><NavLink to='/newSchedule'>New Schedule</NavLink></li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;