import React from "react";
import './About.css';
export default function About() {
    return (
        <div>
        <div className='container'>
       <div className='row justify-content-evenly py-5'>
           <div className='col-sm-8 col-md-5'>
               <img className='img-fluid' src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg" alt="aboutus img"/>
           </div>
           <div className='col-12 col-md-6 mt-5 mt-md-0'>
             <h2 className='mb-0'>About US </h2>
             <h1 className ='mb-1'style={{fontWeight:900}}>We care about the environment</h1>
             <p style={{fontWeight: 300}}>From grid-independent solar power systems and private PV systems on garages to large solar parks - we are shaping the future of energy supply along with our customers and partners as a global provider of energy solutions.

Sustainability is more than just a buzzword for us. This is what we stand for every day with our work, our vision, our mission and our values.Our commitment to both Kenya helped us in becoming Kenya’s leading Solar Company. Our goal is to provide homes and businesses right across this country with a renewable energy solutions & quality solar energy systems. We are proud to say we save our valued customers money in energy bills while working towards a cleaner environment. Our clients are happier and are more power efficient.
You may be a single site business or multinational company, come from the private or public sector, or be based in the heart of Nairobi or the most remote rural location like Turkana. Whether your objective is to reduce your carbon footprint, drive down energy costs or secure a reliable energy supply, we will work with you to find your ideal renewable energy solution.</p>
              
           </div>
       </div>
    </div>
    </div>
    );
}