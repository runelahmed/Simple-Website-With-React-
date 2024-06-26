import logo from '../assets/images/logo.svg';
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
// Navigation background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});

const showMobileMenu = () => {
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
  mobileMenu.classList.toggle('active');
}


  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <div className="navbar__logo">
          <img src={logo} alt="Leno" />
        </div>
        <div className="navbar__menu">
          <ul className="navbar__menu-list">
            <li className="navbar__menu-item">
              <a href="index.html" className="navbar__menu-link">Home</a>
            </li>
            <li className="navbar__menu-item">
              <a href="index.html#features" className="navbar__menu-link"
                >Features</a
              >
            </li>
            <li className="navbar__menu-item">
              <a href="index.html#preview" className="navbar__menu-link">Preview</a>
            </li>
            <li className="navbar__menu-item">
              <a href="index.html#details" className="navbar__menu-link">Details</a>
            </li>
            <li className="navbar__menu-item">
              <a href="index.html#download" className="navbar__menu-link"
                >Download</a
              >
            </li>
            <li className="navbar__menu-item">
              <a href="#" className="navbar__menu-link--primary">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#" className="navbar__menu-link--primary">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Mobile Menu & Hamburger Icon --> */}
        <div className="navbar__mobile-menu">
          <div onClick={showMobileMenu} className="navbar__mobile-menu-toggle">
            <FaBars/>
          </div>
          {/* <!-- Mobile Menu Items --> */}
          <div className="navbar__mobile-menu-items">
            <ul className="navbar__mobile-menu-list">
              <li className="navbar__mobile-menu-item">
                <a href="index.html" className="navbar__mobile-menu-link">Home</a>
              </li>
              <li className="navbar__mobile-menu-item">
                <a href="index.html#features" className="navbar__mobile-menu-link"
                  >Features</a
                >
              </li>
              <li className="navbar__mobile-menu-item">
                <a href="index.html#preview" className="navbar__mobile-menu-link"
                  >Preview</a
                >
              </li>
              <li className="navbar__mobile-menu-item">
                <a href="index.html#details" className="navbar__mobile-menu-link"
                  >Details</a
                >
              </li>
              <li className="navbar__mobile-menu-item">
                <a href="index.html#download" className="navbar__mobile-menu-link"
                  >Download</a
                >
              </li>
              <li className="navbar__mobile-menu-item">
                <a href="#" className="navbar__mobile-menu-link--primary">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="navbar__mobile-menu-item">
                <a href="#" className="navbar__mobile-menu-link--primary">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
