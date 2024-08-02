import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msg_icon} alt="msg_icon" />
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
          consectetur ex, similique temporibus quo ea quaerat cum optio non
          obcaecati ad itaque odit, voluptates laborum! Perspiciatis fugit
          magnam aliquid ducimus.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail_icon" /> Contact@brandao.dev
          </li>
          <li>
            <img src={phone_icon} alt="phone_icon" />
            +237 675627146
          </li>
          <li>
            <img src={location_icon} alt="location_icon" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, Cameroon
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" placeholder='Enter Your Name' required/>
          <label htmlFor="number">Phone Number</label>
          <input type="tel" name='phone' id='number' placeholder='Enter Your mobile Number' required/>
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" id="message" rows="6" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className="btn dark-btn">
            Submit Now
            <img src={white_arrow} alt="white_arrow" />
          </button>
        </form>
        <span></span>
      </div>
    </div>
  )
}
export default Contact