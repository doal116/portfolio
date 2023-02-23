import './main.css';
import react from '../svg/react.svg';
import js from '../svg/js.svg';
import python from '../svg/python.svg';
import bash from '../svg/bash.svg';
import git from '../svg/git.svg';
import C from '../svg/c.svg';
import node from '../svg/node.svg';
import mongodb from '../svg/mongodb.svg';
import ecommerce from './ecommerce.jpg';
import responsiveWebDesign from '../certifications/responsiveWebDesign.jpg';
import relationalDatabase from '../certifications/relationalDatabase.jpg';
import frontEndLibraries from '../certifications/frontEndLibraries.jpg';
import javaScriptAlgo from '../certifications/javascript.jpg';
import alexBulganinCv from '../alexBulganinCv.pdf';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft, faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import propTypes  from 'prop-types';

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
//----------About Me Section-----------//
//----------------------------------------//
const Skills = ({ skills }) => {
    return (
        <div className='skills' id='skills'>
            {
                skills.map((skill, i) =>
                    <div className='skill' key={i.toString()}>
                        <img src={skill['image']} alt={`${skill['name']} logo`}></img>
                        <span>{skill['name']}</span>
                        <span className='experience'>{skill['experience']}</span>
                    </div>
                )
            }
        </div>

    )
}
const AboutMe = ({ skills }) => {

    useEffect(() => {
        let right = true;
        setInterval(() => {
            if (document.getElementById('skills').scrollLeft > 1200)
                right = false;

            if (right) gotToRight();
            else gotToLeft();

            if (!right && document.getElementById('skills').scrollLeft === 0)
                right = true;
        }, 3500);
    });

    return (
        <section id="aboutMe">
            <div className="info">
                <div className='leftSide'>
                    <h1>About Me</h1>
                    <p>I'm an eager and meticulous front-end developer looking for an entry-level position with a company to put my coding abilities to use, solve challenging issues, and aid in a prompt completion of projects.</p>
                    <p>I'm also interested in backend development and would like to be build a proficiency in that area.</p>
                    <div className='hireCv'>
                        <a href="mailto:bulganinbralex@yahoo.com" ><button className='hireMe' >HIRE ME</button></a>
                        <a href={alexBulganinCv} target="__blank" >
                            <button className='downloadCv'>DOWNLOAD CV</button></a>
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
        </section>
    )
}
Skills.propTypes = {
    skills: propTypes.array
};
AboutMe.propTypes = {
    skills: propTypes.array
};
//----------Certificate Section-----------//
//----------------------------------------//
const CertificateBox = ({ certificates }) =>
    certificates.map(
        (certificate, i) =>
            <a href={certificate['link']} key={i.toString()}>
                <div className='certificateBox' >
                    <img src={certificate['image']} alt="certificate"></img>
                    <div className='certificateInfo'>
                        <span className='name'>{certificate['name']}</span>
                        <span className='issuingOrg'>{certificate['issuingOrg']}</span>
                    </div>
                </div>
            </a>
    );
const Certificates = ({ certificates }) => {
    return (
        <section id='certificates'>
            <h1>Certifications</h1>
            <div className='certificateDisplay'>
                <CertificateBox certificates={certificates} />
            </div>
        </section>
    )
}
Certificates.propTypes = {
    certificates: propTypes.array
};
CertificateBox.propTypes = {
    certificates: propTypes.array
};
//-----------Porfolio Section----------//
//---------------------------------------//
const PortfolioBox = ({ portfolio }) =>
    portfolio.map((elem, i) =>
        <div className='projectBox' key={i.toString()}>
            <img src={elem['image']} alt="project Display"></img>
            <div>
                <h2 className='name'>{elem['name']}</h2>
                <span className='description'>{elem['description']}</span>
            </div>
        </div>
    );
const Portfolio = ({ portfolio }) => {
    return (
        <section id='portfolio'>
            <h1>Portfolio</h1>
            <p>The projects that are currently finished and those that are being built are listed below.</p>
            <div className='portfolioDisplay'>
                <PortfolioBox portfolio={portfolio} />
            </div>
        </section>
    )
}
PortfolioBox.propTypes = {
    portfolio: propTypes.array
};
Portfolio.propTypes = {
    portfolio: propTypes.array
};
//---------------------------------------//
//---------------------------------------//

function Main() {
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
    const portfolio = [
        {
            name: 'E-commerce website',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.',
            image: ecommerce
        }
    ];
    return (
        <main>
            <AboutMe skills={skills} />
            <Certificates certificates={certificates} />
            <Portfolio portfolio={portfolio} />
        </main>
    )
}
export default Main;