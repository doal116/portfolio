import './footer.css';
import footerSocial from './footerSocial.svg';
function Footer() {
    return (
        <footer>
            <div className='upperPart'>
                <span>Let’s work together</span>
                <p>I’m available for freelance work. Have any projects in your mind? Just feel free to contact me</p>
                <button>Contact Me</button>
            </div>
            <div className='lowerPart'>
                <span className='copyright'>© 2021 <span className='brand'>Templates Jungle</span>. All rights reserved</span>
                <img src={footerSocial} alt="socialMedia accounts"></img>
            </div>
        </footer>
    )
}

export default Footer;