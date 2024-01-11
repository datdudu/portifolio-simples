import './About.css'
import AboutTitle from '../../components/About/AboutTitle/AboutTitle'
import AboutImage from '../../components/About/AboutImage/AboutImage'
import AboutText from '../../components/About/AboutTitle/AboutTitle'

function About(){
    return (
        <>
            <div className='about'>
                <AboutTitle />
                <div className='about-content'>
                    <AboutImage />
                    <AboutText />
                </div>
            </div>
        </>
    )
}

export default About