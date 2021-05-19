import React from 'react'
import "./PageStyle.css"
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';


export default function ContactPage() {
    
    function sendEmail(event){
        event.preventDefault();

        emailjs.sendForm('service_qdmzwcc', 'template_xkq7ypb', event.target, init('user_9BMcI0ZbI2edCsmQthKHX'))
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.target.reset()
    }
    
    return (
        <div className="contact-page-div">
            <h1 className="contact-title">Let's connect!</h1>
            <div className="contact-container">
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-7 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-7 form-group mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-7 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-7 form-group mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message here" name="message"></textarea>
                    </div>
                    <div className="col-7 pt-3 mx-auto">
                        <input type="submit" className="btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}
