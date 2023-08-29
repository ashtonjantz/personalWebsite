import React from "react";
import Navbar from "./NavBar";
import resume from '../images/resume.pdf';
import lovepik from '../images/lovepik.png'

const About = () => {

    return(
        <div>
            <Navbar></Navbar>
            <div className="aboutBody">
            <h1>About</h1>
            <div className="selfieDiv"><img src= {lovepik} alt="selfie" className="selfie"/></div>
            <hr />
            <h2>Hi, I'm Ashton Jantz.</h2>
            <p class = "aboutMe">
                Passionate about all things tech. Graduating from <span className="spanTag">Coding Dojo's</span> online coding camp has been a pivotal moment for me. It's empowered me with the skills to bring me closer to my tech dreams and has ignited an even deeper fascination for the world of programming. Recently, I decided to take a step further in expanding my knowledge of the realm of technology. Ive enrolled in a series of <span className="spanTag">programming and cyber-sercurity</span> classes at my local college. My coding journey has just begun, and I can't wait to see where this incredible adventure takes me.
            </p>
            <p className="aboutMe">
             For more deatails find me on <a href="https://www.linkedin.com/in/ashtonjantz14/" target=" _blank" className="spanTag">LinkedIn</a> or take a look at resume below
            </p>
            <div className = "resume">
                <a className = "button-52" href={resume} target = "_blank">Resume</a>
            </div>
            </div>
        </div>

    )
}
export default About;