import React, { useRef } from "react";
import Navbar from "./NavBar";
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('ashton_id', 'template_kizyer8', form.current, 'kwq3uxjgL2wMDTiJn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();

    }

    return(
        <div>
        {/*add resume, linked in , and indeed  */}
        <Navbar></Navbar>
        <h1>Contact</h1>
        <p className="contactP">Get in touch with me via <span className="spanTag">email</span> down below.</p>
        
        <div className="formBody">
        <div className="form">
        <form ref={form} onSubmit={sendEmail}>
      <div className="title">Let's Connect!</div>
      <div className="input-container ic1">
        <input id="name" className="input" type="text" placeholder=" " name = "user_name" />
        <div className="cut"></div>
        <label for="name" className="placeholder">Name</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " name = "user_email" />
        <div class="cut"></div>
        <label for="email" className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <textarea id="message" className="input" placeholder=" "  name = "message"/>
        <div className="cut cut-short"></div>
        <label for="message" className="placeholder">Message</label>
      </div>
      <button type="text" className="submit">submit</button>
    </form>
    </div>
    </div>
</div>


    )

}
export default Contact;
