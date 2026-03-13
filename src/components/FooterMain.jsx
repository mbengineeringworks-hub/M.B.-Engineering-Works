import {
  FaSearch,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

export default function FooterMain() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Recently Updated Products */}

          <div className="col-lg-4">
            <h5 className="footer-title">RECENTLY UPDATED PRODUCTS</h5>

            <ul className="footer-list">
              <li>
                <FaSearch /> 4 shaft automatic pvc insulation tape cutting
                machine
              </li>

              <li>
                <FaSearch /> 4 shaft automatic pvc insulation tape cutting
                machine in india
              </li>

              <li>
                <FaSearch /> 4 shaft automatic pvc insulation tape cutting
                machine in gujarat
              </li>

              <li>
                <FaSearch /> 4 shaft automatic pvc insulation tape cutting
                machine in ahmedabad
              </li>

              <li>
                <FaSearch /> 4 shaft automatic pvc insulation tape cutting
                machine supplier
              </li>
            </ul>
          </div>

          {/* Opening Hours */}

          <div className="col-lg-4">
            <h5 className="footer-title">OPENING HOURS</h5>

            <ul className="footer-hours">
              <li>Mon : 9:00 AM to 6:00 PM</li>
              <li>Tue : 9:00 AM to 6:00 PM</li>
              <li>Wed : 9:00 AM to 6:00 PM</li>
              <li>Thu : 9:00 AM to 6:00 PM</li>
              <li>Fri : 9:00 AM to 6:00 PM</li>
              <li>Sat : 9:00 AM to 6:00 PM</li>
              <li>Sun : 9:00 AM to 6:00 PM</li>
            </ul>
          </div>

          {/* Subscribe */}

          <div className="col-lg-4">
            <h5 className="footer-title">SUBSCRIBE US</h5>

            <p>Subscribe to our Youtube channel</p>

            <div className="subscribe-box">
              <a
                href="https://youtube.com/@MBengineers" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FaYoutube size={22} />
              </a>
            </div>

            <h5 className="footer-title mt-4">SOCIAL SHARE</h5>

            <div className="social-icons">
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href={`https://wa.me/${7871845570}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href={`https://wa.me/${12358}`}
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
