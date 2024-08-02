import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'



const Testimonials = () => {
  {/**logic for next and back btn */}
  const slider= useRef()
  let tx = 0;
  const slideForward = () => {
    if(tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return (
    <div className="testimonials">
      {/**adding a slider */}
      <img
        src={next_icon}
        alt="next_icon"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="back_icon"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user_1" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad
                hic labore nam accusamus libero atque, quo natus ab velit unde
                laudantium ut ratione tenetur nesciunt deleniti consectetur
                asperiores totam ipsam deserunt omnis, veritatis rem nobis.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user_2" />
                <div>
                  <h3>Fred Bowman</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad
                hic labore nam accusamus libero atque, quo natus ab velit unde
                laudantium ut ratione tenetur nesciunt deleniti consectetur
                asperiores totam ipsam deserunt omnis, veritatis rem nobis.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user_3" />
                <div>
                  <h3>Lucy Jay</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad
                hic labore nam accusamus libero atque, quo natus ab velit unde
                laudantium ut ratione tenetur nesciunt deleniti consectetur
                asperiores totam ipsam deserunt omnis, veritatis rem nobis.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user_4" />
                <div>
                  <h3>Samuel Stone</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad
                hic labore nam accusamus libero atque, quo natus ab velit unde
                laudantium ut ratione tenetur nesciunt deleniti consectetur
                asperiores totam ipsam deserunt omnis, veritatis rem nobis.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Testimonials