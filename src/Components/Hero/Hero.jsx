import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          doloribus similique cum, voluptatum magni in illum consequuntur
          repellendus consectetur, quod earum facere, reiciendis amet officiis
          perferendis recusandae? Molestiae, hic eius.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="dark_arrow" />
        </button>
      </div>
    </div>
  )
}
export default Hero