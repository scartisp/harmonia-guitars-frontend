import './Footer.css'
import FooterLogo from "./footerLogo/FooterLogo";

const Footer = () => {
    return (
        <footer className="border-box marginal-padding background-deepest-indigo ">
            <div id="main-footer-container" className='jst-slf-center width-100 max-width-2000'>
                <div id="footer-top-section" className="width-100 relative">
                    <FooterLogo />
                    <p className='body-txt-font txt-cream font-15px'>Practice with purpose. Build schedules, learn songs, and sharpen technique alongside a
                        community of guitarists</p>
                </div>
                <div id='footer-bottom-section'>
                    <p className='body-txt-font txt-cream font-15px margin-0'>&copy; 2026 Harmonia Guitars</p>
                    <p className='body-txt-font txt-cream font-15px txt-underline margin-0 pointer'>Contact</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;