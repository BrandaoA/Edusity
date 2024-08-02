import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about_img" className="about-img" />
        <img src={play_icon} alt="play_icon" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Dolor aliquam temporibus maxime cum incidunt, provident rerum libero, perferendis suscipit aperiam magni ut animi quis! Sit nobis sunt placeat tenetur et earum dolores itaque!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus et odio itaque dolorem! Saepe itaque nisi nihil temporibus, enim autem commodi quaerat dignissimos optio magnam sint facilis corrupti illum ipsa vero nesciunt accusantium obcaecati, deserunt aliquam maxime neque fugiat perferendis fugit.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius molestias aut aperiam. Cumque non provident fugiat, labore vero a exercitationem quidem tenetur, quaerat facere, rerum consequuntur quibusdam dolorum molestiae aliquid distinctio atque excepturi.</p>
      </div>
    </div>
  )
}
export default About