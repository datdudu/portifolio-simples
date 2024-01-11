import './Contact.css'
import ContactTitle from '../../components/Contact/ContactTitle/ContactTitle'
import ContactInfo from '../../components/Contact/ContactInfo/ContactInfo'
import ContactForm from '../../components/Contact/ContactForm/ContactForm'

function Contact(){
    return (
        <>
            <div className="contact">
                <ContactTitle />
                <div className='contact-content'>
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </>
    )
}
export default Contact