import './ContactInfo.css'
import Envelope from './../../../assets/envelope.png'
import LocationArrow from './../../../assets/location-arrow.png'
import Phone from './../../../assets/phone-alt.png'
function ContactInfo(){
    return(
        <>
            <div className='contact-info'>
                <div className='contact-info-line'>
                    <img src={Phone} alt="" />
                    <div className='contant-info-line-phone'>
                        <p>+8801863-931220</p>
                        <p>+8801567-953483</p>
                    </div>
                </div>
                <div className='contact-info-line'>
                    <img src={Envelope} alt="" />
                    <p>mdriead.bd@gmail.com</p>
                </div>
                <div className='contact-info-line'>
                    <img src={LocationArrow} alt="" />
                    <p>Zirabo, Ashulia, Savar, Dhaka</p>
                </div>
            </div>
        </>
    )
}

export default ContactInfo