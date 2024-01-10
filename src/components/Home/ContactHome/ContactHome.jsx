import './ContactHome.css'
import ContactTitle from '../../Contact/ContactTitle/ContactTitle'
import ContactInfo from '../../Contact/ContactInfo/ContactInfo'
import ContactForm from '../../Contact/ContactForm/ContactForm'

function ContactHome(){
    return(
        <>
            <div id="ContactSection" className="contact">
                <ContactTitle />
                <div className='contact-content'>
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default ContactHome