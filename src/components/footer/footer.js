import './footer.css';
import github from '../svg/github.svg';
import instagram from '../svg/instagram.svg';
import linkedin from '../svg/linkedin.svg';
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
                <ul className='socialMedia'>
                    <li><a href="https://github.com/doal116?tab=overview" target="__blank" ><img src={github} alt={'github logo'} /></a></li>
                    <li><a href="https://www.instagram.com/chartam_1/" target="__blank" ><img src={instagram} alt={'instagram logo'} /></a></li>
                    <li><a href="https://www.linkedin.com/in/alex-bulganin-00740525b/" target="__blank" ><img src={linkedin} alt={'linkedin logo'} /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;