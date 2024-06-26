import headerBackground from '../assets/images/header-background.jpg';
import headerSmartPhone from '../assets/images/header-smartphones.png';

const Header = () => {
  return (
    <header className="hero" style={{
        background: `#000 url(${headerBackground}) center center/cover no-repeat`
      }}>
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            Your
            <span className="hero__title--primary">productivity</span> assistant
          </h1>
          <p className="hero__description">
            Boost your productivity and improve your health with Leno - the
            all-in-one app for developers and creators.
          </p>
          <div className="hero__buttons">
            <a href="#download" className="hero__button btn">
              <i className="fa-brands fa-apple"></i> For Apple
            </a>
            <a href="#download" className="hero__button btn">
              <i className="fa-brands fa-android"></i> For Android
            </a>
          </div>
        </div>
        <div className="hero__image">
          <img src={headerSmartPhone} alt="Leno App" />
        </div>
      </div>
    </header>
  )
}

export default Header
