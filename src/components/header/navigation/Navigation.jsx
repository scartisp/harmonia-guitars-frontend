import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

const Navigation = () => {
    return (
        <nav>
            <ul id='nav-ul' className="flex wrap jst-cnt-center list-style-none padding-0">
                <li className="nav-divider-selected"><NavLink to='/' className="selected-page">Home</NavLink></li>
                <li className="nav-divider"><NavLink to='/songLibrary'>Song Library</NavLink></li>
                <li className="nav-divider"><a href="#">Technique Library</a></li>
                <li className="nav-divider"><a href="#">Schedule Library</a></li>
                <li className="nav-divider"><a href="#">New Schedule</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;