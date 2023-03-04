import React from 'react'
import facebook from '../assets/facebook.png';
import whatsapp from '../assets/whatsapp.png';
import twitter1 from '../assets/twitter 1.png';
import twitter2 from '../assets/twitter 2.png';
import arrow from '../assets/arrow right.png';
import instgram from '../assets/instagram.jpeg';
import { Link } from 'react-router-dom';

const Footer = () => {

    const submit = (e) =>{
        e.preventDefault();
        let input = document.querySelectorAll(".input-text");
        input[0].value = "";
        input[1].value = "";
        window.alert("Message Send Succesfully!");
    }
  return (
      <footer class="footer grid" id="footer">
            <div class="box">
                <h2>Extra links</h2>
                <ul  class="flex">
                    <li> <img src={arrow} alt=""/> <Link to="/">Home</Link></li>
                    <li> <img src={arrow} alt=""/> <Link to="/services">services</Link></li>
                    <li> <img src={arrow} alt=""/> <Link to="/about">About</Link></li>
                    <li> <img src={arrow} alt=""/> <Link to="/contact">Contact us</Link></li>
                    <li> <img src={arrow} alt=""/> <Link to="/about">More</Link></li>
                </ul>
            </div>
            <div class="box">
                <h2>Follow Us</h2>
                <ul  class="flex">
                    <li> <img src={facebook} alt=""/> <Link to="/">Facebook</Link></li>
                    <li> <img src={whatsapp} alt=""/> <Link to="/">Whatsapp</Link></li>
                    <li> <img src={twitter1} alt=""/> <Link to="/">twitter</Link></li>
                    <li> <img src={instgram} alt=""/> <Link to="/">Intragram</Link></li>
                    <li> <img src={twitter2} alt=""/> <Link to="/">More</Link></li>
                </ul>
            </div>
            <div class="box">
                <h2>Emails Us</h2>
                <form onSubmit={submit}>
                    <input className='input-text' type="text" name="messgae" placeholder="Send us messgae address.."/>
                    <input className='input-text' type="email" name="email" placeholder="Enter your Email address.."/>
                    <input class="btn" type="submit" value="Submit"/>
                </form>
           </div>
      </footer>
  )
}

export default Footer
