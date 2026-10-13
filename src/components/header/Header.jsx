import "./Header.css";
import logo from './images/Logo-mark.svg';
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <img src={logo} alt="logo"/>
            <h1>HI</h1>
            <Navigation />
        </header>
    );
};

export default Header;