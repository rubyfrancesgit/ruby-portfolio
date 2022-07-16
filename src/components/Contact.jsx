import { useState } from 'react';

// Media
import mailIconLightmode from '../assets/mail.svg';
import mailIconDarkmode from '../assets/mail-darkmode.svg';
import linkedinLightmode from '../assets/linkedin-lightmode.svg';
import linkedinDarkmode from '../assets/linkedin-darkmode.svg';

function Contact() {
    const [modalBackgroundClasses, setModalBackgroundClasses] = useState("modal-background hide");
    const [contactModalClasses, setContactModalClasses] = useState("contact-modal hide");

    const launchContactModal = () => {
        setContactModalClasses("contact-modal");
        setModalBackgroundClasses("modal-background");
    }

    function closeModal() {
        setModalBackgroundClasses("modal-background hide");
        setContactModalClasses("contactmodal hide");
      }

  return (
    <>
        <div className={contactModalClasses}>
            <p className="contact-modal__heading">Get in touch!</p>

            <button className="contact-modal__btn">Download CV</button>

            <div>
                <div className="contact-modal__info-div">
                    <img className="contact-modal__icon contact-modal__lightmode" src={mailIconLightmode} alt="mail icon" />
                    <img className="contact-modal__icon contact-modal__darkmode" src={mailIconDarkmode} alt="mail icon" />
                    
                    <p className="contact-modal__p">ruby.cuzens@gmail.com</p>
                </div>

                <div className="contact-modal__info-div">
                    <img className="contact-modal__icon contact-modal__lightmode" src={linkedinLightmode} alt="LinkedIn icon" />

                    <img className="contact-modal__icon contact-modal__darkmode" src={linkedinDarkmode} alt="LinkedIn icon" />

                    <a className="contact-modal__p contact-modal__link" href="https://www.linkedin.com/in/ruby-doyle/" target="_blank">https://www.linkedin.com/in/ruby-doyle/</a>
                </div>
            </div>
        </div>

        <center className={modalBackgroundClasses} id="modalBackground" onClick={closeModal}>
        </center>

        <div className="contact" onClick={launchContactModal}>
            <img className="contact__img contact__lightmode" src={mailIconLightmode} alt="Contact button" />
            <img className="contact__img contact__darkmode" src={mailIconDarkmode} alt="Contact button" />
        </div>
    </>
  )
}

export default Contact
