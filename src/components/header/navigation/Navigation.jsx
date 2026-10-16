import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul id='nav-ul' className="flex wrap jst-cnt-center list-style-none padding-0">
                <li className="nav-divider-selected"><a href="#" className="selected-page">Home</a></li>
                <li className="nav-divider"><a href="#">Song Library</a></li>
                <li className="nav-divider"><a href="#">Technique Library</a></li>
                <li className="nav-divider"><a href="#">Schedule Library</a></li>
                <li className="nav-divider"><a href="#">New Schedule</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;