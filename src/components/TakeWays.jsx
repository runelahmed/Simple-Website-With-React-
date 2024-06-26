import featuresSmartphone from '../assets/images/features-smartphone-1.png';
import {FaRocket, FaCode, FaGem, FaCalendar, FaBook, FaCube} from 'react-icons/fa'

const TakeWays = () => {
    const iconSize = {
        fontSize: '60px',
        color: '#08c0dd'
    }
  return (
    <section className="features" id="features">
      <div className="features__container container">
        <div className="features__content">
          <h2 className="features__title">Key Takeaways</h2>
          <p className="features__description">
            Discover the powerful features that make Leno the ultimate
            productivity and health companion:
          </p>
          <div className="features__grid">
            {/* <!-- Grid Column 1 --> */}
            <div className="features__grid-column features__grid-column-left">
              {/* <!-- Grid Item 1 --> */}
              <div className="features__grid-item">
                <div className="features__grid-item-text">
                  <h4 className="features__grid-item-text-title">Real-Time Data</h4>
                  <p className="features__grid-item-text-description">
                    Access real-time data instantly, ensuring you're always
                    up-to-date with the latest information.
                  </p>
                </div>
                <div className="features__grid-item-icon">
                  <FaRocket style={iconSize}/>
                </div>
              </div>
              {/* <!-- Grid Item 2 --> */}
              <div className="features__grid-item">
                <div className="features__grid-item-text">
                  <h4 className="features__grid-item-text-title">Visual Editor</h4>
                  <p className="features__grid-item-text-description">
                    Customize your workspace with our intuitive visual editor.
                  </p>
                </div>
                <div className="features__grid-item-icon">
                <FaCode style={iconSize}/>
                </div>
              </div>
              {/* <!-- Grid Item 3 --> */}
              <div className="features__grid-item">
                <div className="features__grid-item-text">
                  <h4 className="features__grid-item-text-title">
                    Refined Options
                  </h4>
                  <p className="features__grid-item-text-description">
                    Access a wide range of refined options to tailor Leno to
                    your unique needs.
                  </p>
                </div>
                <div className="features__grid-item-icon">
                <FaGem style={iconSize}/>
                </div>
              </div>
            </div>

            {/* <!-- Grid Column 2 --> */}
            <div className="features__grid-column features__grid-column-center">
              <img src={featuresSmartphone} alt="" />
            </div>

            {/* <!-- Grid Column 3 --> */}
            <div className="features__grid-column features__grid-column-right">
              {/* <!-- Grid Item 1 --> */}
              <div className="features__grid-item">
                <div className="features__grid-item-text">
                  <h4 className="features__grid-item-text-title">Calendar Input</h4>
                  <p className="features__grid-item-text-description">
                    Seamlessly integrate your calendar to stay organized and on
                    track.
                  </p>
                </div>
                <div className="features__grid-item-icon">
                <FaCalendar style={iconSize}/>
                </div>
              </div>
              {/* <!-- Grid Item 2 --> */}
              <div className="features__grid-item">
                <div className="features__grid-item-text">
                  <h4 className="features__grid-item-text-title">Easy Reading</h4>
                  <p className="features__grid-item-text-description">
                    Enjoy distraction-free reading with Leno's clean and
                    intuitive interface.
                  </p>
                </div>
                <div className="features__grid-item-icon">
                <FaBook style={iconSize}/>
                </div>
              </div>
              {/* <!-- Grid Item 3 --> */}
              <div className="features__grid-item">
                <div className="features__grid-item-text">
                  <h4 className="features__grid-item-text-title">
                    Good Foundation
                  </h4>
                  <p className="features__grid-item-text-description">
                    Leno is built on a solid foundation of user feedback and
                    cutting-edge technology.
                  </p>
                </div>
                <div className="features__grid-item-icon">
                <FaCube style={iconSize}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TakeWays
