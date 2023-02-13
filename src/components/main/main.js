import './main.css';

const Skills = ({ skills }) => {
    return (
        <div className='skills'>
            {
                skills.map(skill =>
                    <div className='skill'>{skill}</div>
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
                    <Skills skills={['hello', 'goodBey', 'nice to see you', 'life']} />
                    <div className='prev'></div>
                    <div className='next'></div>
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