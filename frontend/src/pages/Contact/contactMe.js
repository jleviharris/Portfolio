import React from "react";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const ContactMe = () => {
  const navigate = useNavigate();
  return (
    <div className="contact" id="Contact">
      <button className="backButton" onClick={() => navigate("/")}>
        BACK
      </button>
      <form
        className="form"
        action="https://formspree.io/f/myyookvd"
        method="POST"
      >
        <h2 className="contact-title">Contact Me</h2>
        <input type="hidden" name="_subject" value="Portfolio Email" />
        {/* <label className="form-text">Name:</label> */}
        <br />
        <input type="text" name="name" placeholder="Name" required />
        {/* <label className="form-text">Email:</label> */}
        <br />
        <input type="email" name="email" placeholder="Email Address" />
        {/* <label className="form-text">Message:</label> */}
        <br />
        <textarea
          type="text"
          name="message"
          placeholder="Write your message here"
          id="message"
        />
        <button id="submit" className="submit" type="submit">
          Send
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ContactMe;
