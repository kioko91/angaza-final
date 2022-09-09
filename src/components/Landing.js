import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import { NavLink } from 'react-router-dom';

export default function Landing() {
    
return (
    <div>
            <section className="ambulance">
            <div>
            <section className="desc">
                <div className="descc">
                    <img src="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/1024x536/9/9/2/511992_shutterstock_644976451.jpg" alt=" " />
                    <p className="feel">We care about providing clean energy 💡<br />Welcome All </p>
                </div>
            </section>
        </div>
            </section>
            <section className="hero">
                <div className="rowcon">
                    <div className="img">
                        <img src='https://d2cbg94ubxgsnp.cloudfront.net/Pictures/1024x536/9/9/2/511992_shutterstock_644976451.jpg' alt=" " />
                    </div>
                    <div className="content">
                        <span>Angaza Jamii</span>
                        <h2>We care about providing clean energy</h2>
                        <p>Are you in need of solar technology in your homes or in your business establishment? Reach out to us to apply for you to be connected to our technicians</p>
                        <button id="enr"><NavLink to ="/application">Apply Now</NavLink></button>
                        <button id="ex"><NavLink to ="/solartypes">Explore</NavLink></button>
                    </div>           
                </div>
            </section>
        </div>
    );
}