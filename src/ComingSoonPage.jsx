import React from 'react';
import './ComingSoonPage.css'; // CSS file to style the components
import ContactForm from './contact';
import TopNavbar from './topnav';


const ComingSoonPage = () => {
  return (
    <div className = 'csshandler'>
      <div className="navbar">
        <span className='company'>Sarvottam Megapolis</span>
        <TopNavbar/>
        </div>
    <div className="coming-soon-container">
      <section className="coming-soon-section">
        <div className="gridbg content ">
        <div className="box">
        
           <span className='coming'>Coming Soon 
  

   <span  className="waviy span">.</span>
   <span  class="waviy sec">.</span>

</span>
          <span className='desc'>1600 Acre Green Hi-tech City <br/> Opposite Bodaki Railway Junction, Greater Noida,           Gautam Buddha Nagar, U.P</span>
          </div>
        </div>
       </section>
      
      </div>
      <section className="contact-section">
        <div className="content1">
          <form>
           <ContactForm/>
          </form>
  
        </div>
      </section>
  
    

    </div>
  );
};

export default ComingSoonPage;
