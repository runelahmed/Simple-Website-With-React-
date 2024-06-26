import ScreenShot1 from '../assets/images/screenshot-1.png'
import ScreenShot2 from '../assets/images/screenshot-2.png'
import ScreenShot3 from '../assets/images/screenshot-3.png'
import ScreenShot4 from '../assets/images/screenshot-4.png'

const Screenshots = () => {
  return (
    <section className="screenshots" id="screenshots">
      <div className="screenshots__container container">
        <div className="screenshots__content">
          <h2 className="screenshots__title">Screenshots</h2>
          <div className="screenshots__images">
            <img src={ScreenShot1} alt="Screenshot" />
            <img src={ScreenShot2} alt="Screenshot" />
            <img src={ScreenShot3} alt="Screenshot" />
            <img src={ScreenShot4} alt="Screenshot" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Screenshots
