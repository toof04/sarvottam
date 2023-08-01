import React from 'react';
import './ComingSoonPage.css'; // CSS file to style the components
import ContactForm from './contact';


const ComingSoonPage = () => {
  return (
    <div className="coming-soon-container">
      <section className="coming-soon-section">
        <div className="gridbg content ">
        <div className="box">
        <span className='company'>Sarvottam Megapolis</span>
           <span className='coming'>Coming Soon..</span>
          <span className='desc'>1600 Acre Green Hi-tech City <br/> Opposite Bodaki Railway Junction, Greater Noida,           Gautam Buddha Nagar, U.P</span>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="content1">
          <form>
           <ContactForm/>
          </form>
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12
          !1m3!1d28049.733970338235!2d77.58446215!3d28.503125899999997!2m3!1f0!2f0!3f
          0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c953de3437925%3A0xbdeb5d45b606c2f7
          !2sMegapolis%2C%20Chamrawali%20Ramgarh%2C%20Uttar%20Pradesh%20203207!5e0!3m2!1
          sen!2sin!4v1690862756635!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <section className='footer'>
        .
      </section>
    </div>
  );
};

export default ComingSoonPage;
