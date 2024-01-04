import DevImage from '../../../assets/dev_photo.jpeg'
import './AboutImage.css'

function AboutImage(){
    return(
        <>
            <img src={DevImage} alt="" className='about-image'/>
        </>
    )
}

export default AboutImage