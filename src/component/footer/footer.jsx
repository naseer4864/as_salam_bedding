import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faHashtag } from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-contact">
                <div className="get">
                <FontAwesomeIcon icon={faMessage}  className="footer-icon"/>
                <p style={{ paddingTop: "5px" }}>Get in Touch With us Today</p>
                </div>
                <div className="call">
                <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                <a href="tel:+234 8136630651">Call us</a>
                </div>
                <div className="email">
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                <a href="maito:titilopeluxury">Email us</a>
                </div>
                <div className="ins">
                <FontAwesomeIcon icon={faHashtag} className="footer-icon" />
                <a href="https://www.instagram.com/p/Cn25qmKoyKw/?igshid=MDM4ZDc5MmU="
                 style={{ paddingBottom: "5px" }}>INSTAGRAM</a>
                </div>
            </div>
            <div className="footer-right">
                <p>&copy; 2023 As_salam bedding & more.All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;