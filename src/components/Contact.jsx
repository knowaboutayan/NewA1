import React from 'react';
import ContactForm from './subComponents/ContactForm';
import SectionTitle from './subComponents/SectionTitle';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <SectionTitle sectionName="Contact" />
            
                <div className="contactContent">
                    <div className="contactForm">
                        <ContactForm />
                    </div>
                    <div className="contactDetails">
                        <iframe
                            title="Google Maps"
                            style={{ border: "none" }}
                            width="100%"
                            height="200px"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14751.148705734407!2d86.99243475!3d22.437034800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1706478675620!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="contactInfo flex flexColumnDirection centerAlign">
                            <h3><i className="fa fa-phone"></i> : 7001953003</h3>
                            <h3><i className="fas fa-envelope"></i> : info.creationology@gmail.com</h3>
                            <h3><i className="fab fa-github"></i> : /knowaboutayan</h3>
                            <h3><i className="fab fa-linkedin"></i> : /ayanpradhan</h3>
                        </div>
                    </div>
   
            </div>
        </>);
};

export default Contact;
