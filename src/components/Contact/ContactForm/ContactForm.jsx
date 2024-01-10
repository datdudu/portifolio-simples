import './ContactForm.css'

function ContactForm(){
    return (
        <>
            <form className='contact-form'>
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" name="" id="name" placeholder='Full Name' className='contact-info-input-full-width'/>
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input type="email" name="" id="email" placeholder='Email Address' className='contact-info-input-full-width'/>
                </div>
                <div className='contact-form-phone-subject '>
                    <div>
                        <label htmlFor="phone"></label>
                        <input type="text" name="" id="phone" placeholder='Phone Number' className='contact-info-input-full-width'/>
                    </div>
                    <div>
                        <label htmlFor="subject"></label>
                        <input type="text" name="" id="subject" placeholder='Subject' className='contact-info-input-full-width'/>
                    </div>
                </div>
                <div>
                    <label htmlFor="message"></label>
                    <textarea type="text" name="" id="message" placeholder="Your Message" className='contact-info-textarea-message'/>
                </div>
                <div className='contact-form-send'>
                    <button>Send</button>
                </div>
            </form>
        </>
    )
}

export default ContactForm