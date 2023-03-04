import React from 'react';
import men1 from '../assets/men1.png';
import men2 from '../assets/men2.png';
import men3 from '../assets/men3.png';
import back from '../assets/back.png';
import next from '../assets/next.png';


const Slider = () => {
    let index = 0;

    const goBack = () =>{
        let slides = document.querySelectorAll('.container .slide');
        slides[index].classList.remove('slide-active');
        index = ((index - 1) + slides.length) % slides.length;
        slides[index].classList.add('slide-active');
    }

    const goNext = () =>{
        let slides = document.querySelectorAll('.container .slide');
        slides[index].classList.remove('slide-active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('slide-active');
    }
  return (
    <main className="container">
    <div className="slide-container">
        <div className="slide slide-active">
            <div className="content">
                <h1>Hi, I am Developer</h1>
                <p>I am fronted-end Web Developer</p>
                <button className="btn">Learn more</button>
            </div>
            <div className="images">
                <img src={men2} alt=""/>
            </div>
        </div>  
        <div className="slide">
            <div className="content">
                <h1>Skills:</h1>
                <p>I have learnd Html,Css,Scss,Js,React</p>
                <button className="btn">Learn more</button>
            </div>
            <div className="images">
                <img src={men1} alt=""/>
            </div>
        </div>
        <div className="slide">
            <div className="content">
                <h1>Sevices:-</h1>
                <p>I can create a beautiful static website</p>
                <button className="btn" >Learn more</button>
            </div>
            <div className="images">
                <img src={men3} alt=""/>
            </div>
        </div>

        <div onClick={goBack} className="prev"><img src={back} alt=""/></div>
        <div onClick={goNext} className="next"><img  src={next} alt=""/></div>

     </div>
   </main>
  )
}

export default Slider
