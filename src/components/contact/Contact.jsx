import React, { useRef } from 'react';
import "./contact.css";

import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

import emailjs from '@emailjs/browser';

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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vlkb00s',
        'template_l7rtxte',
        form.current,
        'diHA3a7YwWzBDmcfH'
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
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

        <form
          ref={form}
          onSubmit={sendEmail}
        >

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="cc"
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

