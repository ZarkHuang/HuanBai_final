import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import '../style/contactus/contact.css'
import ToTop from "../component/ToTop";
import swal from 'sweetalert';


const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_xhj75se",
        "template_ra0lvvs",
        form.current,
        "YQpfQ9KuQ90YjHVIp"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal('成功', '我們已收到你的來信，我們將會盡快回覆你。', 'success');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (  
  <section class="contact pt-15">
    <ToTop/>
          <div class="section-content flex-column">
          <div className="opportunities__head">
          <h2 className="opportunities__title">聯絡我們</h2>
          <p className="opportunities__description">Contact us</p>
        </div>
              <div class="contact-form-wrap">
                  <div class="container">
                      <form class="contact-form" ref={form} onSubmit={sendEmail}>
                        <div class="form-group">
                              <label>Name </label>
                              <input type="text" name="user_name" id="" placeholder="Your name"></input>
                          </div>  
                          
                        <div class="form-group">
                              <label>Your Email Address </label>
                              <input type="email" name="user_email" id="" placeholder="something@website.com"></input>
                          </div>

                          <div class="form-group">
                              <label>Message </label>
                              <textarea name="message" id="" rows="15" placeholder="Your message starts with…"></textarea>
                          </div>
                          <div class="form-group">
                              <button type="submit" class="form-btn btn__farm--invest" value="Send">Send a Message</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
  </section>

  );
};

export default Contactus;