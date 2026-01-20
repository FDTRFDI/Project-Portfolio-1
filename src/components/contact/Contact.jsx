import React, { useRef } from 'react';
import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'



import emailjs from '@emailjs/browser';

const ContactData = [

{

id:1,
icon: <MdOutlineEmail />,
title:"Email",
info: "Radatech@gmail.com",
link:"mailto:test@gmail.com",

},

{

id:2,
icon: <RiMessengerLine />,
title:"Messenger",
info: "Radatech",
link:"https://m.me/houdareda.99",

},

{

id:3,
icon: <BsWhatsapp />,
title:"WhatsApp",
info: "+971542483423",
link:"https://api.whatsapp.com/send?phone=971542483423",
}
]





function Contact() {
   const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vlkb00s', 'template_l7rtxte', form.current, 'diHA3a7YwWzBDmcfH',)
      e.target.reset()
  };

  return (
    <section className='contact' id="contact">
   <div className='top_section'>
   1<h5> Get in touch </h5>
   <h2> Contact me  </h2>
   </div>

<div className='container contact_container'>

<div className='contact_options'>
  {ContactData.map(({id ,icon , title , info , link }) => ( 
    <article key={id}className='contact_option'>
      {icon}
<h4>{title}</h4>
<h5> {info} </h5>
<a href={link} target='_blank'>send Message</a>

    </article>
  ))}

  </div>

<form ref={form} onSubmit={ sendEmail}>
<input type='text' placeholder='full name' name='name'/>
<input type='email' placeholder='your Email' name='cc'/>
<textarea  name='message' rows={10}  id='' placeholder='Enter Your message ' ></textarea> 
<button className='btn btn-primary'>Send Message </button>
</form>
</div> 
</section>    
  )
}

export default Contact