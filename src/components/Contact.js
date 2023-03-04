import React from 'react'
import telegram from "../assets/telegram.png"
import location from "../assets/location.png"
import phone from "../assets/phone.png"
import coding from "../assets/coding.png"

const Contact = () => {
  const submit = (e) =>{
    e.preventDefault();
    let value = document.getElementsByClassName("value");
    value[0].value = "";
    value[1].value = "";
    value[2].value = "";
    value[3].value = "";
    let message = document.querySelector(".message");
    message.classList.toggle("active");
    setTimeout(() => {
      message.classList.toggle("active");
    }, 2000);
  }
  return (
    <div className='contact flex-row'>
       <form className="form"  onSubmit={submit}>
            <h1>Send us a message</h1>
            <h3 className="message">Message Sent Succesfully!</h3>
            <input className='value' type="text" name="name" id="name"  placeholder='Name'/>
            <input className='value' type="email" name="email" id="email"  placeholder='Email' />
            <textarea className='value' name="text" id="text" cols="50" rows="10" placeholder='Message'></textarea>
            <input type="submit" className='btn' value="Send Message" />
       </form>
       <div className="information">
            <h1>Contact us</h1>
            <p className='suggestion'>We're open for any suggestion or just to have a chat</p>
            <di className="icons">
                <img src={location} alt="" />
                <p>Address: <span className='span'> 155 West Invisible Street, Suite 721 New World</span></p>
            </di>
            <di className="icons">
                <img src={phone} alt="" />
                <p>Phone: <span className='span'> + 1234 5678 910</span></p>
            </di>
            <di className="icons">
                <img src={telegram} alt="" />
                <p>Email: <span className='span'> iamrealleader@yoursite.com</span></p>
            </di>
            <di className="icons">
                <img src={coding} alt="" />
                <p>Website <span className='span'> portfolio.com</span></p>
            </di>
       </div>
    </div>
  )
}

export default Contact
