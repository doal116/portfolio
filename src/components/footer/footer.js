import './footer.css';
import footerSocial from '../svg/footerSocial.svg';
function Footer() {
    return (
        <footer>
            <div className='upperPart'>
                <span>Let’s work together</span>
                <p>I’m available for freelance work. Have any projects in your mind? Just feel free to contact me</p>
                <a href="mailto:bulganinbralex@yahoo.com" ><button>Contact Me</button></a>
            </div>
            <div className='lowerPart'>
                <span className='copyright'>© {new Date().getFullYear()} <span className='brand'>Alex Bulganin</span>. All rights reserved</span>
                <img src={footerSocial} alt="socialMedia accounts"></img>
            </div>
        </footer>
    )
}

export default Footer;