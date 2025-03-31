import footerData from "../../api/footerApi.json"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Footers = () => {

  const footerIcon = {

    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    IoMailUnreadOutline: <IoMailUnreadOutline />,

  }

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {
          footerData.map((currData, index) => {
              return <div className="footer-contact" key={index}>
                <div className="icon">{footerIcon[currData.icon]}</div>
                  <div className="footer-contact-text">
                    <p>{currData.title}</p>
                    <p>{currData.details}</p>
                  </div>
              </div>
          })
        }
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="/" target="_blank">
                  Kushagra Rastogi
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.linkedin.com/in/kushagra-rastogi-0080411a2/"
                    target="_blank"
                  >
                    LinkedIn
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="https://thapatechnical.shop/source-code"
                    target="_blank"
                  >
                    Source Code
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footers