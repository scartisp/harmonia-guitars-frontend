import './Navigation.css';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { motion } from 'motion/react';

const Navigation = () => {

    const links = [
        { to: '/songLibrary', label: 'song library' },
        { to: '/techniqueLibrary', label: 'technique library' },
        { to: '/scheduleLibrary', label: 'schedule library' },
        { to: '/newSchedule', label: 'new schedule' }
    ]
    const [hovered, setHovered] = useState(null);
    const toggleHovered = linkTo => {
        setHovered(linkTo)
    }
    const { pathname } = useLocation();
    const highlighted = hovered ?? pathname;

    //toggle nav stuff
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
                <ul id='main-nav-ul' className={`flex wrap jst-cnt-center list-style-none padding-0 ${menuOpen ? '' : 'nav-hidden'} `} onMouseLeave={() => toggleHovered(null)} >
                    {links.map(link => (
                        <li key={link.to} className='nav-divider relative' onMouseEnter={() => toggleHovered(link.to)}>
                            <NavLink to={link.to} className={`body-txt-font font-18px uppercase txt-decoration-none ${highlighted === link.to ? 'txt-orange' : 'txt-cream'}`}>
                                {link.label}
                            </NavLink>
                            {highlighted === link.to && (
                                <motion.div layoutId='nav-underline' className='nav-underline' />
                            )}

                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navigation;