import './main.css';
import react from './react.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft, faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const Skills = ({ skills }) => {
    return (
        <div className='skills'>
            {
                skills.map(skill =>
                    <div className='skill'>
                        <img src={react} alt={'react log'}></img>
                        <span>{skill}</span>
                        <span className='experience'>1 year of experience</span>
                    </div>
                )
            }

        </div>

    )
}

const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="info">
                <div className='leftSide'>
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus vulputate pulvinar cursus suspendisse risus vulputate  enim pharetra eu. </p>
                    <p>Sit faucibus suspendisse risus vulputate pulvinar cursus enim hareta  eu. Sagittis enim morb. Suspendisse risus.</p>
                    <div className='hireCv'>
                        <button className='hireMe'>HIRE ME</button>
                        <button className='downloadCv'>DOWNLOAD CV</button>
                    </div>
                </div>
                <div className='rightSide'>
                    <Skills skills={['React', 'React', 'React', 'Python']} />
                    <div className='prev'>
                        <i><FontAwesomeIcon icon={faChevronLeft} /></i>
                    </div>
                    <div className='next'>
                        <i><FontAwesomeIcon icon={faChevronRight} /></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Main() {
    return (
        <main>
            <AboutMe />
        </main>
    )
}
export default Main;