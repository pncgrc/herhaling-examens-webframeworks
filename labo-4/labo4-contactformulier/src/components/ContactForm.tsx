import { useState } from "react";

const ContactForm = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [confirmationText, setConfirmationText] = useState<string>("");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault(); // Belangrijk om POST te voorkomen
        setConfirmationText(`Thanks ${firstName} ${lastName}! We will contact you at ${email}.`);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
    }

    const checkDisabled = () => {
        return firstName === "" || lastName === "" || email === "" || message === "" ? true : false;
    }

    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">First name <input type="text" placeholder="First name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/></label><br />
                <label htmlFor="">Last name <input type="text" placeholder="Last name" value={lastName} onChange={(event) => setLastName(event.target.value)}/></label><br />
                <label htmlFor="">Email <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/></label><br />
                <textarea name="" id="" value={message} onChange={(event) => setMessage(event.target.value)}></textarea><br />
                <button disabled={checkDisabled()}>Send</button>
            </form>
            { confirmationText !== "" && <p>{confirmationText}</p> }
            
        </>
    );
}

export default ContactForm;