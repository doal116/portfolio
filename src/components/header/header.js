import github from './github.svg';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';
import './header.css';
function scroller(elem) {
    let e = document.getElementById(elem);
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center'
    });
}
function Header() {
    return (
        <header>
            <div className="upperPart">
                <div className="webDevName">
                    <span className='firstName'>Alex</span>
                    <span className='LastName'>Bulganin</span>
                </div>
                <nav>
                    <li>Portfolio</li>
                    <li>Skills</li>
                    <li>Certifications</li>
                    <li onClick={()=>scroller('aboutMe')}>About</li>
                    <li>Resume</li>
                </nav>
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
                <img src={github} alt={'github logo'}></img>
                <img src={instagram} alt={'instagram logo'}></img>
                <img src={linkedin} alt={'linkedin logo'}></img>
            </div>
        </header>
    )
}
export default Header;