import './Navigation.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <a id='toggle-nav' onClick={toggleNav} >
                {menuOpen ? (<p>&#8963;</p>) : (<p>&#8964;</p>)}
            </a>
            <ul id='nav-ul' className={`flex wrap jst-cnt-center list-style-none padding-0 ${menuOpen ? '' : 'nav-hidden'} `}>
                <li className="nav-divider"><NavLink
                    to='/songLibrary'>Song Library
                </NavLink></li>
                <li className="nav-divider"><NavLink to='/techniqueLibrary'>Technique Library</NavLink></li>
                <li className="nav-divider"><NavLink to='/scheduleLibrary'>Schedule Library</NavLink></li>
                <li className="nav-divider"><NavLink to='/newSchedule'>New Schedule</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;