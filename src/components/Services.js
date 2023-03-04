import React from 'react'
import fastDelivery2 from '../assets/fast-delivery.png'
import responsive from '../assets/responsive-design.png'
import free from '../assets/free.png'
import bug from '../assets/bug.png'
import database from '../assets/database.png'
import aviable from '../assets/24-7.png'


const Services = () => {
  return (
    <div className='service'>
      <div className="service-container">
        <h1>Services</h1>
        <p>I can create a Simple,Reponive,Fast and Creative website </p>
        <p>Within minimum Cost and Customized Features</p>
      </div>

        <h1 className='h1'>Features</h1>
        <div className="features">
            <div className="box">
                <img src={fastDelivery2} alt="" />
                <div className="content">
                    <h2>Fast Delivery</h2>
                    <p> We try to deliver website faster within that given time by user.</p>
                </div>
            </div>
            <div className="box">
                <img src={responsive} alt="" />
                <div className="content">
                    <h2>Responsive website</h2>
                    <p> We try to create a responsive website for user taht works on different divices perfectly.</p>
                </div>
            </div>
            <div className="box">
                <img src={free} alt="" />
                <div className="content">
                    <h2>Free HTTP</h2>
                    <p> We Give free HTTP cerficate to ensure the security of website to a user.</p>
                </div>
            </div>
            <div className="box">
                <img src={bug} alt="" />
                <div className="content">
                    <h2>Free Bug fixing</h2>
                    <p> If there is any bug in website, we fix it for free for a user.</p>
                </div>
            </div>
            <div className="box">
                <img src={database} alt="" />
                <div className="content">
                    <h2>Free Hosting</h2>
                    <p> we host a website on given hosting server by user for free for a user.</p>
                </div>
            </div>
            <div className="box">
            <img src={aviable} alt="" />
            <div className="content">
                    <h2>Avaible 24/7</h2>
                    <p>We are Avaible 24/7 to create a website for a user .</p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Services
