import './main.css';
import react from './react.svg';
import js from './js.svg';
import python from './python.svg';
import bash from './bash.svg';
import git from './git.svg';
import C from './c.svg';
import node from './node.svg';
import mongodb from './mongodb.svg';
import responsiveWebDesign from './responsiveWebDesign.jpg';
import relationalDatabase from './relationalDatabase.jpg';
import frontEndLibraries from './frontEndLibraries.jpg';
import javaScriptAlgo from './javascript.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft, faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';

const gotToRight = () => {
    document.getElementById(
        'skills'
    ).scrollLeft += 230;
}
const gotToLeft = () => {
    document.getElementById(
        'skills'
    ).scrollLeft -= 230;
}

const Skills = ({ skills }) => {
    return (
        <div className='skills' id='skills'>
            {
                skills.map((skill, i) =>
                    <div className='skill' key={i.toString()}>
                        <img src={skill['image']} alt={'react log'}></img>
                        <span>{skill['name']}</span>
                        <span className='experience'>{skill['experience']}</span>
                    </div>
                )
            }

        </div>

    )
}

const AboutMe = () => {
    const skills = [{
        name: 'React.js',
        image: react,
        experience: '6 months of experience'
    },
    {
        name: 'JavaScript',
        image: js,
        experience: '7 months of experience'
    }, {
        name: 'Python',
        image: python,
        experience: '2 years of experience'
    }, {
        name: 'C',
        image: C,
        experience: '3 years of experience'
    }, {
        name: 'Bash',
        image: bash,
        experience: '4 months of experience'
    },
    {
        name: 'Git',
        image: git,
        experience: '1 year of experience'
    },
    {
        name: 'mongodb',
        image: mongodb,
        experience: '3 months of experience'
    },
    {
        name: 'node.js',
        image: node,
        experience: '4 months of experience'
    }
    ];
    useEffect(() => {
        let right = true;
        setInterval(() => {
            if (document.getElementById('skills').scrollLeft > 1200) {
                right = false;
            }

            if (right)
                gotToRight();
            else gotToLeft();

            if (!right && document.getElementById('skills').scrollLeft === 0)
                right = true;
        }, 3500);
    });

    return (
        <div id="aboutMe">
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
                    <Skills skills={skills} />
                    <div className='prev' onClick={gotToLeft}>
                        <FontAwesomeIcon icon={faChevronLeft} className="prevArrow" />
                    </div>
                    <div className='next' onClick={gotToRight}>
                        <FontAwesomeIcon icon={faChevronRight} className="nextArrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const CertificateBox = ({ certificates }) => {
    return (
        certificates.map(
            (certificate, i) =>
                <a href={certificate['link']}>
                    <div className='certificateBox' >
                        <img src={certificate['image']} alt="certificate"></img>
                        <div className='certificateInfo'>
                            <span className='name'>{certificate['name']}</span>
                            <span className='issuingOrg'>{certificate['issuingOrg']}</span>
                        </div>
                    </div>
                </a>
        )
    )
}
const Certificates = () => {
    const certificates = [
        {
            name: 'Response Web Design',
            image: responsiveWebDesign,
            issuingOrg: 'Issued by FCC(freeCodeCamp)'
            , link: 'https://www.freecodecamp.org/certification/fcc1609ce1d-ea08-4c43-ab2d-161da1cdae94/responsive-web-design'
        },
        {
            name: 'JavaScript Algorithms and Data Structures',
            image: javaScriptAlgo,
            issuingOrg: 'Issued by FCC(freeCodeCamp)'
            , link: 'https://www.freecodecamp.org/certification/fcc1609ce1d-ea08-4c43-ab2d-161da1cdae94/javascript-algorithms-and-data-structures'
        },
        {
            name: 'Front End Development Libraries',
            image: frontEndLibraries,
            issuingOrg: 'Issued by FCC(freeCodeCamp)'
            , link: 'https://www.freecodecamp.org/certification/fcc1609ce1d-ea08-4c43-ab2d-161da1cdae94/front-end-development-libraries'
        },
        {
            name: 'Relational Database',
            image: relationalDatabase,
            issuingOrg: 'Issued by FCC(freeCodeCamp)'
            , link: 'https://www.freecodecamp.org/certification/fcc1609ce1d-ea08-4c43-ab2d-161da1cdae94/relational-database-v8'
        }

    ];
    return (
        <div id='certificates'>
            <h1>Certifications</h1>
            <div className='certificateDisplay'>
                <CertificateBox certificates={certificates} />
            </div>
        </div>
    )
}

const Portfolio = () => {
    return (
        <div id='portfolio'>
            <h1>Portfolio</h1>
            <p>The projects that are currently finished and those that are being built are listed below.</p>
            <div className='portfolioDisplay'>
                {
                    <div>
                        <img></img>
                        <div></div>
                    </div>
                }
            </div>
        </div>
    )
}


function Main() {
    return (
        <main>
            <AboutMe />
            <Certificates />
            <Portfolio />
        </main>
    )
}
export default Main;