import github from './github.svg';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import alexBulganinCv from '../alexBulganinCv.pdf';

function scroller(elem) {
    let e = document.getElementById(elem);
    e.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
}
function Header() {
    return (
        <header>
            <div className="upperPart">
                <div className="webDevName">
                    <span className='firstName'>A</span>
                    <span className='LastName'>B</span>
                </div>

                <div className='menu'>
                    <i><FontAwesomeIcon  icon={faBars} /></i>
                    <div className='phoneViewMenu'>
                        <nav>
                            <li onClick={() => scroller('aboutMe')}>About</li>
                            <li onClick={() => scroller('certificates')}>Certifications</li>
                            <li onClick={() => scroller('portfolio')}>Portfolio</li>
                        </nav>
                        <a href={alexBulganinCv} target="__blank" ><button className='resume'>Resume</button></a>
                    </div>
                </div>
            </div>
            <div className='middlePart'>
                <div className='intro' >
                    <div className='helloIntro'>
                        <span>Hello, I’m</span>
                        <span className='name'> Alex Bulganin</span>
                    </div>
                    <div className='shortStatement'>
                        Front-end Web Developer & aspiring fullStack Dev.
                        Quality work is my priority.
                    </div>
                </div>
                <button className='getInTouch'>GET IN TOUCH</button>
            </div>
            <div className='bottomPart'>
                
                <li><a href="https://github.com/doal116?tab=overview" target="__blank" ><img src={github} alt={'github logo'}/></a></li>
                <li><a href="https://www.instagram.com/chartam_1/" target="__blank" ><img src={instagram} alt={'instagram logo'}/></a></li>
                <li><a href="https://github.com/doal116?tab=overview" target="__blank" ><img src={linkedin} alt={'linkedin logo'}/></a></li>
            </div>
        </header>
    )
}
export default Header;