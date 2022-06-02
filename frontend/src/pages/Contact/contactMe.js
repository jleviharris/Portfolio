import React from "react";

const ContactMe = () => {
  return (
    <div className="contact" id="Contact">
      <form className="form">
        <h2 className="contact-title">Contact Me</h2>
        <label className="form-text" for="fname">
          First name:
        </label>
        <br />
        <input type="text" id="fname" name="fname" value="John" />
        <br />
        <label className="form-text" for="lname">
          Last name:
        </label>
        <br />
        <input type="text" id="lname" name="lname" value="Doe" />
        <br />
        <label className="form-text" for="email">
          Enter your email:
        </label>
        <input type="email" id="email" name="email" />
        <br />
        <br />
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactMe;
