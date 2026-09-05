import React from 'react';
import "./contact.css";

import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "webvanta9@gmail.com",
    link: "mailto:webvanta9@gmail.com",
  },
  {
    id: 2,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "+971542483423",
    link: "https://api.whatsapp.com/send?phone=971542483423",
  },
  {
    id: 3,
    icon: <FaTiktok />,
    title: "TikTok",
    info: "@createwebdesign",
    link: "https://www.tiktok.com/@createwebdesign",
  }
];

function Contact() {

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = e.target;
    const button = form.querySelector("button");

    button.disabled = true;
    button.textContent = "Sending...";

    try {
      const formData = new FormData(form);

      const response = await fetch(
        "https://formsubmit.co/ajax/webvanta9@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        }
      );

      const data = await response.json();

      if (data.success) {

        // Google Ads Conversion
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-18420491649/6CS_CPimo-4CEIhYc9E",
            value: 1.0,
            currency: "AED"
          });
        }

        alert("Message sent successfully!");

        form.reset();

      } else {
        throw new Error("Form submission failed");
      }

    } catch (error) {
      console.error("Form Error:", error);
      alert("Failed to send message. Please try again.");
    }

    button.disabled = false;
    button.textContent = "Send Message";
  };

  return (
    <section className="contact" id="contact">

      <div className="top_section">
        <h5>Get in Touch</h5>
        <h2>Contact Us</h2>
      </div>

      <div className="container contact_container">

        <div className="contact_options">

          {ContactData.map(({ id, icon, title, info, link }) => (
            <article
              key={id}
              className="contact_option"
            >

              {icon}

              <h4>{title}</h4>

              <h5>{info}</h5>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title === "TikTok"
                  ? "View Profile"
                  : "Send Message"}
              </a>

            </article>
          ))}

        </div>

        <form onSubmit={sendEmail}>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />

          <textarea
            name="message"
            rows={10}
            placeholder="Enter your message"
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;