import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="our programs" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What Our Students Say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact/>
      </div>
    </div>
  )
}
export default App