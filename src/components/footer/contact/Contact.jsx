import { useState } from "react";

const Contact = () => {
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
        if (data.success) {
            setResult("Form Submitted Successfully");
            setTimeout(()=>{setResult('');}, 3000);
            event.target.reset();
        } else {
            setResult("Error");
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <p>
                <label for='name'>Name:</label>
                <input type="text" name="name" required />
            </p>
            <p>
                <label for='email'>Email:</label>
                <input type="email" name="email" required />
            </p>
            <p>
                <label for='message'>Email:</label>
                <textarea name="message" required></textarea>
            </p>
            <p><button type="submit">Submit Form</button></p>
            <p>{result}</p>
        </form>
    );
};

export default Contact;