import './FooterLogo.css'
import logo from '../images/Logo-mark.svg'

const FooterLogo = () => {
 return (
    <div id='footer-logo-container' className="flex flex-row align-items-center">
      <img src={logo}/>
      <div id='footer-name' className='flex flex-column align-items-center width-fit-cnt'>
         <h1 className='h-font txt-orange ltr-spc-two uppercase weight-500 margin-0'>Harmonia</h1>
         <h2 className='h-font txt-cream ltr-spc-two uppercase weight-500 margin-0'>Guitars</h2>
      </div>
    </div>
 )
};
export default FooterLogo;