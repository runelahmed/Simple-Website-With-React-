import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    const  iconSize = {
        fontSize: '45px'
    }
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__about">
          <h4 className="footer__title">About Leno</h4>
          <p className="footer__description">
            Leno is a mobile app that helps you stay focused and improve your
            productivity. The app provides you with tools to set goals, track
            your progress, and maintain a healthy work-life balance.
          </p>
        </div>

        <div className="footer__links">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links-list">
            <li className="footer__links-item">
              <a href="index.html" className="footer__links-link"> Home </a>
            </li>
            <li className="footer__links-item">
              <a href="index.html#testimonials" className="footer__links-link">
                Testimonials
              </a>
            </li>
            <li className="footer__links-item">
              <a href="index.html#features" className="footer__links-link">
                Features
              </a>
            </li>
            <li className="footer__links-item">
              <a href="index.html#preview" className="footer__links-link">
                Preview
              </a>
            </li>
            <li className="footer__links-item">
              <a href="index.html#details" className="footer__links-link">
                Details
              </a>
            </li>
            <li className="footer__links-item">
              <a href="index.html#download" className="footer__links-link">
                Download
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <a href="#" className="footer__social-link">
            <FaFacebook style={iconSize}/>
          </a>
          <a href="#" className="footer__social-link">
            <FaTwitter style={iconSize}/>
          </a>
          <a href="#" className="footer__social-link">
            <FaInstagram style={iconSize}/>
          </a>
          <a href="#" className="footer__social-link">
            <FaLinkedin style={iconSize}/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
