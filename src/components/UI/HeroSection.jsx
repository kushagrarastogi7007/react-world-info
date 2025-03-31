import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className='hero-section main'>
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className='heading-xl'>All the World's Info, Just for You! 🌍💡</h1>
          <p className='paragraph'>From flags to facts—your ultimate guide to countries, cultures, and world data! 🗺️ Your go-to platform for global insights—compare nations, uncover facts, and stay informed.</p>

          <NavLink to={"country"}>
          <button className='btn btn-darken btn-inline btn-white-box'>Strart Exploring <FaLongArrowAltRight /></button>
          </NavLink>
          
        </div>
        <div className="hero-image">
          <img src="/images/world.png" alt="world image" className="banner-image" />
        </div>
      </div>
    </main>
  )
}

export default HeroSection