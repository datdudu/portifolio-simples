import './AboutHome.css'
import AboutTitle from '../../About/AboutTitle/AboutTitle'
import AboutImage from '../../About/AboutImage/AboutImage'
import AboutText from '../../About/AboutText/AboutText'

function AboutHome(){
    return(
        <>
            <div id='AboutSection' className='about'>
                <AboutTitle />
                <div className='about-content'>
                    <AboutImage />
                    <AboutText />
                </div>
            </div>
        </>
    )
}

export default AboutHome