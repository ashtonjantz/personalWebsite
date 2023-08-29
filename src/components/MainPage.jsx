import React from "react";
import Navbar from "./NavBar";
import man from '../images/man.png';
import elements from '../images/elements.png'

const MainPage = () => {

    return(
        <div>
            <Navbar></Navbar>
            <div className="row">

                <div className="col-1">
                    <img src={man}
                    alt="man" />
                    <img src={elements} alt="elements" className="elements" />
                </div>
                <div className="col-2">
                 <h1>Hi, I'm <span className="spanTag">Ashton.</span></h1>
                 <p className= "mainParagraph">Im a <span className="spanTag">programmer </span> and <span className="spanTag"> developer</span> based out of California. I enjoy making interactive things with code. Interested in building  all things <span className="spanTag">tech.</span> </p>
                </div>
                {/* <div>
                    <h2>Contact info</h2>
                    <p></p>
                </div> */}
            </div>

        </div>
    )
}
export default MainPage;