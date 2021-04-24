import React from 'react'
import "./PageStyle.css"

// import Form from 'bootstrap';

class ContactPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null,
            }
        }
    
    render() {
        return (
            <div className="contact-form-container">
                <h1>Contact Me</h1>
                <form>
                    <input type="text" name="firstName" value="Name"></input>
                </form>
            </div>
        );
    }
}

export default ContactPage