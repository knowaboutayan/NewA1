// ContactForm.js
import { useState } from "react";
import './ContactForm.css'; // Import CSS file
import SectionTitle from "./SectionTitle";
import '@fortawesome/fontawesome-free/css/all.css';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        setName('');
        setPhone("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact-form">
            <h3><i className="fa fa-send" />GET IN TOUCH</h3>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                <textarea placeholder="Type message..." value={message} onChange={(e) => setMessage(e.target.value)} required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContactForm;
