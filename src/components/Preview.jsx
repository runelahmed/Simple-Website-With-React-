import videoBackground from '../assets/images/video-background.jpg';
import videoFrame from '../assets/images/video-frame.jpg'

const Preview = () => {

  const previewVideoButton = () => {
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.getElementById('videoPlayer');
    const modal = document.getElementById('videoModal');
    // Show modal
    modal.style.display = 'block';

    //Replace the src attribute with the video URL
    videoPlayer.src="https://www.youtube.com/embed/AQUQM-KqIzE";

    // Close modal on close button click
    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
      videoPlayer.src = '';
    });

    // Close modal on outter click
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
      }
    });
  }


  return (
    <>
     {/* <!-- Modal --> */}
     <div className="modal" id="videoModal">
      <div className="modal__content">
        <span className="modal__close-button">&times;</span>
        <iframe
          src=""
          frameBorder="0"
          id="videoPlayer"
          width="560"
          height="315"
          frameBorder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    {/* <!-- Preview --> */}
    <section className="preview" style={{
        background: `url(${videoBackground}) center center/cover no-repeat`
      }} id="preview">
      <div className="preview__container container">
        <div className="preview__content">
          <h2 className="preview__title">Preview</h2>
          <p className="preview__description">
            Take a sneak peek at Leno's sleek and intuitive interface:
          </p>
          <div className="preview__image-container">
            <div className="preview__video-wrapper">
              <img src={videoFrame} alt="preview" />
              <button onClick={previewVideoButton} className="preview__video-button">
                <span className="preview__video-play-button">
                  <span></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Preview
