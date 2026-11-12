import './Contact.css'
import { useState } from "react";

const Contact = ({ isOpen }) => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "3af6f6ef-11f6-4179-93af-fdc460739a0d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (data.success) {
            setResult("Form Submitted Successfully");
            setTimeout(() => { setResult(''); }, 3000);
            event.target.reset();
        } else {
            setResult("Error");
        }
    };

    return (
        <form id='contact-form' className={`${isOpen ? 'flex' : 'display-none'} flex-column max-width-300 gap-4px`} onSubmit={onSubmit}>
            <p>
                <label className='form-field' htmlFor='name'>Name:</label>
                <input className='form-field' type="text" name="name" placeholder='Your Name' required />
            </p>
            <p>
                <label className='form-field' htmlFor='email'>Email:</label>
                <input className='form-field' type="email" name="email" placeholder='Your Email' required />
            </p>
            <p>
                <label className='form-field' htmlFor='message'>Message:</label>
                <textarea className='form-field' name="message" placeholder='Your Message' required></textarea>
            </p>
            <p><button id='' className='form-send-button form-field pointer' type="submit">Send</button></p>
            <p id='form-result' className='form-field' >{result}</p>
        </form>
    );
};

export default Contact;