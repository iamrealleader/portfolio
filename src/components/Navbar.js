import React  from 'react'
import logo from "../assets/protfolio.png";
import menueImg from "../assets/menue.png";
import cross from "../assets/cross.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
    let state = true;
    const toggle = (e) =>{
        let menue = document.querySelector('.primary-header ul');
            console.log(e.target);
            if(state)
            {
              e.target.src = cross;
              state = false
            }
            else
            {
              e.target.src = menueImg;
              state = true;
            }
            menue.classList.toggle('menue-active');
    }
     

  return (
    <>
    <header className="primary-header">
            <div className="logo flex-row">
                <img src={logo} alt=""/>
                <h1>Portfolio</h1>
            </div>
            <nav>
                {/* <NavLink to="/">hkjsfasj</NavLink> */}
                <ul  className="flex">
                {/* <Link to="/">Home</Link> */}
                    <li><Link to="/portfolio">Home</Link></li>
                    <li><Link to="/services">services</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <div className="icon flex">
            <div id="menue-btn" >
                <img onClick={toggle} id="menue-icon" src={menueImg} alt=""/>
            </div>
        </div>
    </header>
    {/* <Outlet /> */}
    </>
  )
}

export default Navbar
