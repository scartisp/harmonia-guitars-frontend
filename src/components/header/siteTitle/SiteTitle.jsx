import './SiteTitle.css'
import logo from '../images/Logo-mark.svg';

const SiteHeader = () => {
    return (
        <div id='title-div' className="flex flex-row relative align-items-center">
            <img src={logo} id='logo-img' />
            <div id='website-name' className='relative flex flex-column align-items-center width-fit-cnt'>
                <h1 className=' h-font ltr-spc-two txt-cream uppercase weight-500 margin-0'>Harmonia</h1>
                <h2 className='h-font ltr-spc-two txt-orange uppercase weight-500 margin-0'>guitars</h2>
            </div>
        </div>
    );
}

export default SiteHeader;