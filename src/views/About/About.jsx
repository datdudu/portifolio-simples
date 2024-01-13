import './About.css'
import AboutTitle from '../../components/About/AboutTitle/AboutTitle'
import AboutImage from '../../components/About/AboutImage/AboutImage'
import AboutText from '../../components/About/AboutText/AboutText'
import HeaderRouter from '../HeaderRouter'

function About(){
    return (
        <>
            <HeaderRouter />
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