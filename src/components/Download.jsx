import {FaAndroid, FaApple} from 'react-icons/fa'
import downloadImg from '../assets/images/download.png'

const Download = () => {
  return (
    <section className="download" id="download">
    <div className="download__container container">
      <div className="download__content">
        <p className="download__description">
          Download Leno today to see the benefits and enjoy the results faster
          than any other app out there
        </p>
        <div className="download__buttons">
          <a href="details.html" className="download__button btn">
            <FaApple/> For Apple
          </a>
          <a href="details.html" className="download__button btn">
            <FaAndroid/> For Android
          </a>
        </div>
      </div>
      <div className="download__image">
        <img src={downloadImg} alt="Download" />
      </div>
    </div>
  </section>
  )
}

export default Download
