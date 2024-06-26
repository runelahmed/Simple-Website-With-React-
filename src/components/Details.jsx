import detailsPng1 from '../assets/images/details-1.png'
import detailsPng2 from '../assets/images/details-2.png'
import {FaCode, FaComments, FaEdit, FaRocket, FaUsers} from 'react-icons/fa'

const Details = () => {
    const iconSize = {
        fontSize: '60px',
        color: '#08c0dd'
    }
  return (
    <section className="details" id="details">
      <div className="details__container container">
        <div className="details__grid">
          {/* <!-- Grid Item 1 --> */}
          <div className="details__grid-image">
            <img src={detailsPng1} alt="Leno App" />
          </div>
          {/* <!-- Grid Item 2 --> */}
          <div className="details__grid-content">
            <h3 className="details__grid-heading">
              Start using Leno today and set your long term goals
            </h3>
            <p className="details__grid-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              consequuntur? Sint nostrum temporibus eum laudantium, quaerat
              voluptates officia modi perspiciatis!
            </p>
            <a href="details.html" className="details__grid-button btn">More</a>
          </div>
          {/* <!-- Grid Item 3 --> */}
          <div className="details__grid-content">
            <h3 className="details__grid-heading">
              The calendar feature helps you schedule tasks
            </h3>
            <p className="details__grid-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              consequuntur? Sint nostrum temporibus eum laudantium, quaerat
              voluptates officia modi perspiciatis!
            </p>
            <a href="details.html" className="details__grid-button btn">More</a>
          </div>
          {/* <!-- Grid Item 4 --> */}
          <div className="details__grid-image">
            <img src={detailsPng2} alt="Leno App" />
          </div>
        </div>

        {/* <!-- Icons --> */}
        <div className="details__icons">
          <div className="details__icons-item">
            <FaUsers style={iconSize}/>
            <div className="details__icons-amount">55, 000</div>
            <h4 className="details__icons-title">Happy Customers</h4>
          </div>
          <div className="details__icons-item">
          <FaCode style={iconSize}/>
            <div className="details__icons-amount">585</div>
            <h4 className="details__icons-title">Issues Solved</h4>
          </div>
          <div className="details__icons-item">
          <FaComments style={iconSize}/>
            <div className="details__icons-amount">788</div>
            <h4 className="details__icons-title">Good Reviews</h4>
          </div>
          <div className="details__icons-item">
          <FaRocket style={iconSize}/>
            <div className="details__icons-amount">100</div>
            <h4 className="details__icons-title">Case Studies</h4>
          </div>
          <div className="details__icons-item">
          <FaEdit style={iconSize}/>
            <div className="details__icons-amount">110</div>
            <h4 className="details__icons-title">Press Article</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
