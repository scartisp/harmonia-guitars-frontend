import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

const Navigation = () => {
    return (
        <nav>
            <ul id='nav-ul' className="flex wrap jst-cnt-center list-style-none padding-0">
                <li className="nav-divider"><NavLink
                    to='/songLibrary'>Song Library
                </NavLink></li>
                <li className="nav-divider"><NavLink to='/techniqueLibrary'>Technique Library</NavLink></li>
                <li className="nav-divider"><NavLink to='/scheduleLibrary'>Schedule Library</NavLink></li>
                <li className="nav-divider"><a href="#">New Schedule</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;