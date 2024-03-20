import React from 'react';
import { NavLink } from 'react-router-dom';
import './Arunsjourney.css';
import  Footer from '../Components/Footer';
import journalistImage from '../assets/journalist.jpg';
import Enroll from '../Components/Enroll';

function Arunsjourney(){
    
    return(
   
   <div className='Journey'>
    <div className='header'> World - Of - Journalism...<span className='bi bi-pen-fill'></span></div>
   <div className='About-journey'>
   <h1>Hello I'm</h1>
   <h2>ARUNMARTIN</h2>
   <img src={journalistImage}  className='journalist-img'alt=''/>
   <p>I am Arun, a humble narrator of stories, a weaver of truths, and a guardian of integrity. My journey in journalism spans over four decades, a tapestry woven with the threads of experiences, challenges, and triumphs.
Born in a small town with big dreams, I was drawn to the art of storytelling from a young age. Fuelled by curiosity and a thirst for truth, I embarked on my journalistic odyssey, navigating through the labyrinth of society, politics, and human emotions.
From the bustling streets of metropolitan cities to the serene landscapes of rural hamlets, I traversed every corner of this diverse nation, witnessing history unfold before my eyes. With a pen as my sword and words as my shield, I stood fearless in the face of adversity, advocating for justice, and shining light on the darkest of shadows.
Through the highs and lows of my career, I have witnessed the evolution of journalism, from the printing press to the digital age. Each story, each byline, has left an indelible mark on my soul, shaping me into the journalist I am today.
But beyond the headlines and bylines lies a deeper truth – a truth that transcends the confines of newsprint and pixels. It is the truth of human connection, of empathy, and of the unwavering pursuit of justice. It is this truth that has driven me to share my knowledge, my wisdom, and my experiences with the world.</p>
<div className='again-course'>
    <h3>Journalism crash Course</h3>
    <h4> Duration</h4>
    <p>2 weeks</p>
    <h4>Price</h4>
    <p>$399</p>
    <Enroll/>
</div>
<h3>Inspiration Behind the Course:</h3>
<p>As a retired journalist, witnessing the enthusiasm of young aspirants ignited a spark within me. I recognized the gaps in traditional training methods and felt compelled to bridge them. Guiding the next generation towards ethical 
storytelling became my mission, ensuring they're equipped to make their mark in the field.
</p>
<h3>Why the 2-Week Course:</h3>
<p>Join me on an exhilarating voyage into the realm of journalism, where words wield power, and narratives shape realities. Here's why you should enroll in my immersive two-week course:</p>  
<div >
   <ul className='why-reasons'>
    <li>Practical Insights: Gain firsthand knowledge from a seasoned journalist with over 40 years of experience.</li>
    <li>Ethical Reporting: Learn the importance of integrity, accuracy, and responsibility in journalism</li>
    <li>Storytelling Mastery: Hone your storytelling skills and craft compelling narratives that resonate with audiences.</li>
   <li>Industry Secrets: Unlock the secrets of investigative reporting, interview techniques, and newsroom dynamics.</li>
   <li>Portfolio Enhancement: Build a robust portfolio under expert guidance and kickstart your career in journalism.</li>
   <li>Networking Opportunities: Connect with industry professionals and fellow aspiring journalists, paving the way for future collaborations.</li>
   <li>Career Guidance: Receive personalized career guidance and insights to navigate the competitive landscape of journalism.</li>
   </ul>
</div>
<p>Embark on this transformative journey with me and unlock the potential within you. Together, let's redefine journalism and shape the narratives of tomorrow.</p>
</div>
<NavLink to="/" className='backtohome'>Back to Home</NavLink>
    <Footer/>
    </div>
    
    );
}
export default Arunsjourney;